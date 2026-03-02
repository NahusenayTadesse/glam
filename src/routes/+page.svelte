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

	let product = $derived(data?.productList);
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<div class="min-h-dvh bg-background text-foreground">
	<!-- Header -->
	<header class="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
		<div class="container mx-auto flex h-16 items-center justify-between px-4">
			<h1
				class="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-xl font-bold text-transparent"
			>
				Glam
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

		<Carousel.Root
			opts={{
				align: 'start'
			}}
			class="w-3/4"
		>
			<Carousel.Content>
				{#each product as product (product.productId)}
					<Carousel.Item class="w-full md:basis-1/2 lg:basis-1/3">
						<ProductCard {...product} />
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	</main>

	<FloatingCart />
	<!-- Floating Cart -->
</div>
