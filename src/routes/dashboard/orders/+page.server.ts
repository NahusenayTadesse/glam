import { setError, superValidate, message, fail } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { eq, and, sql } from 'drizzle-orm';

import { add, edit } from './schema';
import { db } from '$lib/server/db';
import { orders, orderItems, products, customers } from '$lib/server/db/schema';
import type { Actions } from './categories/$types.js';
import type { PageServerLoad } from './categories/$types.js';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod4(add));
	const editForm = await superValidate(zod4(edit));

	const allData = await db
		.select({
			id: orders.id,
			name: customers.name
		})
		.from(orders)
		.leftJoin(customers, eq(orders.customerId, customers.id))
		.where(eq(orders.status, 'pending'));

	const allItems = await db
		.select({
			id: orderItems.id,
			orderId: orderItems.orderId,
			product: products.name,
			quantity: orderItems.quantity,
			price: orderItems.price,
			total: sql<number>`${orderItems.quantity} * ${orderItems.price}`.mapWith(Number)
		})
		.from(orderItems)
		.leftJoin(orders, and(eq(orders.id, orderItems.orderId), eq(orders.status, 'pending')))
		.leftJoin(products, eq(orderItems.productId, products.id));

	return {
		form,
		editForm,
		allData,
		allItems
	};
};

export const actions: Actions = {
	add: async ({ request, locals }) => {
		const form = await superValidate(request, zod4(add));

		if (!form.valid) {
			return message(form, { type: 'error', text: 'Please check the form for Errors' });
		}

		const { name, description, status } = form.data;

		try {
			await db.insert(department).values({
				name,

				description,
				isActive: status,
				createdBy: locals?.user?.id
			});

			return message(form, { type: 'success', text: 'Department Successfully Added' });
		} catch (err: any) {
			if (err.code === 'ER_DUP_ENTRY') setError(form, 'name', 'Department already exists.');
			return message(form, {
				type: 'error',
				text:
					err.code === 'ER_DUP_ENTRY'
						? 'Department is already exists. Please choose another one.'
						: err.message
			});
		}
	},
	edit: async ({ request, locals }) => {
		const form = await superValidate(request, zod4(edit));
		if (!form.valid) {
			return fail(400, { form });
		}

		const { id, name, description, status } = form.data;

		try {
			await db
				.update(department)
				.set({ name, description, isActive: status, updatedBy: locals?.user?.id })
				.where(eq(department.id, Number(id)));
			return message(form, { type: 'success', text: 'Category Successfully Updated' });
		} catch (err: any) {
			if (err.code === 'ER_DUP_ENTRY') return;
			setError(form, 'name', 'Category name already exists.');
			return message(form, {
				type: 'error',
				text:
					err.code === 'ER_DUP_ENTRY'
						? 'Category name is already taken. Please choose another one.'
						: err.message
			});
		}
	}
};
