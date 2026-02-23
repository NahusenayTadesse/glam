<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from '@lucide/svelte';
	import {
		IconBrandFacebook,
		IconBrandInstagram,
		IconBrandTiktok,
		IconBrandTelegram
	} from '@tabler/icons-svelte';

	const shopLinks = [
		{ name: 'Skincare', href: '#' },
		{ name: 'Makeup', href: '#' },
		{ name: 'Haircare', href: '#' },
		{ name: 'Fragrances', href: '#' },
		{ name: 'New Arrivals', href: '#' },
		{ name: 'Best Sellers', href: '#' }
	];

	const supportLinks = [
		{ name: 'Contact Us', href: '#' },
		{ name: 'FAQs', href: '#' },
		{ name: 'Shipping Info', href: '#' },
		{ name: 'Returns & Refunds', href: '#' },
		{ name: 'Track Order', href: '#' }
	];

	const socialLinks = [
		{ icon: IconBrandFacebook, href: '#', label: 'Facebook' },
		{ icon: IconBrandInstagram, href: '#', label: 'Instagram' },
		{ icon: IconBrandTiktok, href: '#', label: 'TikTok' },
		{ icon: IconBrandTelegram, href: '#', label: 'Telegram' }
	];
</script>

<footer id="contact" class="bg-card pt-16 pb-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-4">
			<!-- Brand -->
			<div class="lg:col-span-1">
				<a href="#" class="mb-6 flex items-center gap-2">
					<div class="flex size-10 items-center justify-center rounded-full bg-primary">
						<span class="text-lg font-bold text-primary-foreground">G</span>
					</div>
					<span class="text-xl font-bold tracking-tight">Glam Beauty</span>
				</a>

				<p class="mb-6 text-muted-foreground">
					Ethiopia's premier destination for authentic beauty products. Enhancing natural beauty
					since 2019.
				</p>

				<!-- Social Links -->
				<div class="flex gap-3">
					{#each socialLinks as social}
						<Button variant="outline" size="icon" class="rounded-full" aria-label={social.label}>
							<social.icon class="size-5" />
						</Button>
					{/each}
				</div>
			</div>

			<!-- Shop Links -->
			<div>
				<h4 class="mb-4 font-semibold">Shop</h4>
				<ul class="space-y-3">
					{#each shopLinks as link}
						<li>
							<a
								href={link.href}
								class="text-muted-foreground transition-colors hover:text-primary"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Support Links -->
			<div>
				<h4 class="mb-4 font-semibold">Support</h4>
				<ul class="space-y-3">
					{#each supportLinks as link}
						<li>
							<a
								href={link.href}
								class="text-muted-foreground transition-colors hover:text-primary"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h4 class="mb-4 font-semibold">Contact Us</h4>
				<ul class="flex flex-col gap-4">
					<li class="flex gap-3">
						<MapPinIcon class="size-5 shrink-0 text-primary" />
						<span class="text-muted-foreground">Bole Road, Addis Ababa, Ethiopia</span>
					</li>
					<li class="flex gap-3">
						<PhoneIcon class="size-5 shrink-0 text-primary" />
						<span class="text-muted-foreground">+251 911 123 456</span>
					</li>
					<li class="flex gap-3">
						<MailIcon class="size-5 shrink-0 text-primary" />
						<span class="text-muted-foreground">hello@glambeauty.et</span>
					</li>
					<li class="flex gap-3">
						<ClockIcon class="size-5 shrink-0 text-primary" />
						<span class="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</span>
					</li>
				</ul>
			</div>
		</div>

		<Separator class="my-8" />

		<!-- Bottom -->
		<div
			class="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row"
		>
			<p>&copy; {new Date().getFullYear()} Glam Beauty. All rights reserved.</p>
			<div class="flex gap-6">
				<a href="#" class="transition-colors hover:text-primary">Privacy Policy</a>
				<a href="#" class="transition-colors hover:text-primary">Terms of Service</a>
			</div>
		</div>
	</div>
</footer>
