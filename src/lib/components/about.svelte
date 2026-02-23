<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { CheckCircleIcon, TruckIcon, ShieldCheckIcon, HeadphonesIcon } from '@lucide/svelte';

	const features = [
		{
			icon: CheckCircleIcon,
			title: '100% Authentic',
			description: 'All products are sourced directly from authorized distributors'
		},
		{
			icon: TruckIcon,
			title: 'Fast Delivery',
			description: 'Same-day delivery available in Addis Ababa'
		},
		{
			icon: ShieldCheckIcon,
			title: 'Secure Payment',
			description: 'Multiple payment options including telebirr and CBE'
		},
		{
			icon: HeadphonesIcon,
			title: '24/7 Support',
			description: 'Our beauty experts are always here to help'
		}
	];
</script>

<section id="about" class="bg-linear-to-br from-primary/5 via-background to-accent/5 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Image -->
			<div class="relative">
				<div
					class="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/20 to-accent/20 blur-2xl"
				></div>
				<img
					src="$staticServer/placeholder.svg?size=wide"
					alt="About Glam Beauty"
					class="shadow-lg-2xl relative rounded-3xl"
				/>

				<!-- Floating card -->
				<div class="shadow-lg-xl absolute -right-6 -bottom-6 rounded-2xl bg-card p-6">
					<p class="text-4xl font-bold text-primary">5+</p>
					<p class="text-muted-foreground">Years of Excellence</p>
				</div>
			</div>

			<!-- Content -->
			<div>
				<h2 class="mb-6 text-3xl font-bold sm:text-4xl">
					Ethiopia's Trusted
					<span class="text-primary">Beauty Destination</span>
				</h2>

				<p class="mb-6 text-lg text-muted-foreground">
					Founded in Addis Ababa, Glam Beauty has been bringing premium international beauty brands
					to Ethiopian women since 2019. We believe every woman deserves access to high-quality
					beauty products that celebrate and enhance her natural beauty.
				</p>

				<p class="mb-8 text-muted-foreground">
					Our team of beauty experts carefully curates products that work beautifully with Ethiopian
					skin tones and hair types, ensuring you always find exactly what you need.
				</p>

				<!-- Features -->
				<div class="mb-8 grid gap-4 sm:grid-cols-2">
					{#each features as feature}
						<div class="flex gap-3">
							<div
								class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10"
							>
								<feature.icon class="size-5 text-primary" />
							</div>
							<div>
								<h4 class="font-semibold">{feature.title}</h4>
								<p class="text-sm text-muted-foreground">{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>

				<Button size="lg" class="gap-2">Learn More About Us</Button>
			</div>
		</div>
	</div>
</section>
