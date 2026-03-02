<script lang="ts">
	import { setCart } from '$lib/hooks/cart.svelte.js';
	import { Button } from '$lib/components/ui/button';
	import { SunIcon, MoonIcon } from '@lucide/svelte';
	import FloatingCart from '$lib/components/floating-cart/cart.svelte';
	import ProductCard from '$lib/components/product-card.svelte';
	import { toggleMode } from 'mode-watcher';

	// Set app and cart hooks
	setCart();
	let { data } = $props();

	// Demo products
	// const products = [
	// 	{
	// 		productId: 'PRD-001',
	// 		productName: 'Wireless Headphones',
	// 		price: 149.99,
	// 		category: 'Electronics'
	// 	},
	// 	{
	// 		productId: 'PRD-002',
	// 		productName: 'Mechanical Keyboard',
	// 		price: 89.99,
	// 		category: 'Electronics'
	// 	},
	// 	{ productId: 'PRD-003', productName: 'Ergonomic Mouse', price: 59.99, category: 'Electronics' },
	// 	{ productId: 'PRD-004', productName: 'USB-C Hub', price: 45.99, category: 'Accessories' },
	// 	{ productId: 'PRD-005', productName: 'Monitor Stand', price: 79.99, category: 'Accessories' },
	// 	{ productId: 'PRD-006', productName: 'Desk Lamp', price: 34.99, category: 'Home Office' },
	// 	{ productId: 'PRD-007', productName: 'Webcam HD', price: 69.99, category: 'Electronics' },
	// 	{ productId: 'PRD-008', productName: 'Notebook Set', price: 24.99, category: 'Stationery' }
	// ];

	let product = $derived(data?.productList);
</script>

<div class="min-h-dvh bg-background text-foreground">
	<!-- Header -->
	<header class="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
		<div class="container mx-auto flex h-16 items-center justify-between px-4">
			<h1
				class="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-xl font-bold text-transparent"
			>
				Demo Store
			</h1>
			<Button onclick={toggleMode} variant="outline" size="icon">
				<SunIcon
					class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
				/>
				<MoonIcon
					class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</header>

	<!-- Main Content -->
	<main class="container mx-auto px-4 py-8 pb-24">
		<div class="mb-8">
			<h2 class="mb-2 text-2xl font-bold">Products</h2>
			<p class="text-muted-foreground">
				Click on products to add them to your floating cart. Cart data persists in localStorage!
			</p>
		</div>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each product as product (product.productId)}
				<ProductCard {...product} />
			{/each}
		</div>
	</main>

	<!-- Floating Cart -->
	<FloatingCart />
</div>
