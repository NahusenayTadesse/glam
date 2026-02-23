import * as auth from '$lib/server/auth';
import { fail } from '@sveltejs/kit';

import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { products } from '$lib/server/db/schema';
import { lte, sql } from 'drizzle-orm';
export const load: PageServerLoad = async ({ locals }) => {
	const reorderProducts = await db
		.select({
			name: products.name,
			quantity: products.quantity
		})
		.from(products)
		.where(lte(products.quantity, products.reorderLevel));

	return {
		reorderProducts
	};
};

// export const actions: Actions = {
// 	logout: async (event) => {
// 		if (!event.locals.session) {
// 			return fail(401);
// 		}
// 		await auth.invalidateSession(event.locals.session.id);
// 		auth.deleteSessionTokenCookie(event);

// 		redirect('/login', { type: 'success', message: 'Logout Successful' }, event.cookies);
// 	}
// };
