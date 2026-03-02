<script lang="ts">
	import { useCart } from '$lib/hooks/cart.svelte.js';
	import { Card, CardContent, CardFooter } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { PlusIcon, CheckIcon } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';

	type Props = {
		productId: number;
		productName: string;
		price: number;
		image?: string;
		category?: string;
	};

	const { productId, productName, price, image, category }: Props = $props();
	const cart = useCart();

	let justAdded = $state(false);

	/** Format price to currency */
	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'ETB'
		}).format(price);
	};

	/** Add product to cart */
	const addToCart = () => {
		cart.addItem({ productId, productName, price });
		justAdded = true;
		toast.success(`${productName} added to cart!`);
		setTimeout(() => {
			justAdded = false;
		}, 1500);
	};

	/** Check if item is in cart */
	const quantityInCart = $derived(cart.items.find((i) => i.productId === productId)?.quantity ?? 0);
</script>

<Card
	class="hover:shadow-lg-lg hover:shadow-lg-primary/10 group overflow-hidden transition-all duration-200"
>
	<div class="relative aspect-square overflow-hidden bg-muted">
		<img
			src={'/files/' + image || `$staticServer/placeholder.svg?size=square`}
			alt={productName}
			class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
		/>
		{#if category}
			<Badge class="absolute top-2 left-2" variant="secondary">{category}</Badge>
		{/if}
		{#if quantityInCart > 0}
			<Badge class="absolute top-2 right-2 bg-primary">{quantityInCart} in cart</Badge>
		{/if}
	</div>
	<CardContent class="p-4">
		<h3 class="truncate font-semibold">{productName}</h3>
		<p class="mt-1 text-xs text-muted-foreground">ID: {productId}</p>
		<p class="mt-2 text-lg font-bold text-primary">{formatPrice(price)}</p>
	</CardContent>
	<CardFooter class="p-4 pt-0">
		<Button class="w-full gap-2" onclick={addToCart} variant={justAdded ? 'secondary' : 'default'}>
			{#if justAdded}
				<CheckIcon class="size-4" />
				Added!
			{:else}
				<PlusIcon class="size-4" />
				Add to Cart
			{/if}
		</Button>
	</CardFooter>
</Card>
