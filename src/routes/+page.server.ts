import { db } from '$lib/server/db';
import { products, productCategories } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const productList = await db
		.select({
			productId: products.id,
			productName: products.name,
			price: products.price,
			image: products.featuredImage,

			category: productCategories.name
		})
		.from(products)
		.leftJoin(productCategories, eq(productCategories.id, products.categoryId))
		.where(eq(products.isActive, true));

	return {
		productList
	};
};
