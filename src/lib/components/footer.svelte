<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import {
		FacebookIcon,
		TwitterIcon,
		InstagramIcon,
		LinkedinIcon,
		MailIcon,
		PhoneIcon,
		MapPinIcon
	} from '@lucide/svelte';
	let email = $state('');

	const handleNewsletterSubmit = (e: Event) => {
		e.preventDefault();
		console.log('Newsletter signup:', email);
		email = '';
	};
</script>

<footer class="border-t bg-card text-card-foreground">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Newsletter Section -->
		<div class="mb-12 rounded-lg bg-primary/10 p-8">
			<div class="max-w-md">
				<h3 class="mb-2 text-lg font-semibold">Subscribe to our newsletter</h3>
				<p class="mb-4 text-sm text-foreground/70">
					Get the latest updates on new products and exclusive offers.
				</p>
				<form onsubmit={handleNewsletterSubmit} class="flex gap-2">
					<Input
						type="email"
						placeholder="Enter your email"
						bind:value={email}
						required
						class="flex-1"
					/>
					<Button type="submit" size="sm">Subscribe</Button>
				</form>
			</div>
		</div>

		<!-- Footer Links Grid -->
		<div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
			<!-- Company Info -->
			<div>
				<h4 class="mb-4 font-semibold">About StoreName</h4>
				<p class="mb-4 text-sm text-foreground/70">
					Your trusted online shopping destination for quality products and exceptional service.
				</p>
				<div class="flex flex-col gap-2 text-sm">
					<div class="flex items-center gap-2 text-foreground/70">
						<MapPinIcon class="size-4 shrink-0" />
						<span>123 Main St, City, State 12345</span>
					</div>
					<div class="flex items-center gap-2 text-foreground/70">
						<PhoneIcon class="size-4 shrink-0" />
						<span>+1 (555) 123-4567</span>
					</div>
					<div class="flex items-center gap-2 text-foreground/70">
						<MailIcon class="size-4 shrink-0" />
						<span>support@storename.com</span>
					</div>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="mb-4 font-semibold">Quick Links</h4>
				<ul class="flex flex-col gap-2 text-sm">
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground">Home</a>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground">Shop</a>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>About Us</a
						>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Contact Us</a
						>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground">Orders</a
						>
					</li>
				</ul>
			</div>

			<!-- Customer Service -->
			<div>
				<h4 class="mb-4 font-semibold">Customer Service</h4>
				<ul class="flex flex-col gap-2 text-sm">
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground">FAQ</a>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Shipping Info</a
						>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Returns</a
						>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Track Order</a
						>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Support</a
						>
					</li>
				</ul>
			</div>

			<!-- Legal -->
			<div>
				<h4 class="mb-4 font-semibold">Legal</h4>
				<ul class="flex flex-col gap-2 text-sm">
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Privacy Policy</a
						>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Terms of Service</a
						>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Cookie Policy</a
						>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Accessibility</a
						>
					</li>
				</ul>
			</div>
		</div>

		<!-- Social Links -->
		<div class="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
			<p class="text-sm text-foreground/70">Follow us on social media</p>
			<div class="flex gap-4">
				<Button variant="ghost" size="icon" class="size-10 rounded-full">
					<FacebookIcon class="size-5" />
				</Button>
				<Button variant="ghost" size="icon" class="size-10 rounded-full">
					<TwitterIcon class="size-5" />
				</Button>
				<Button variant="ghost" size="icon" class="size-10 rounded-full">
					<InstagramIcon class="size-5" />
				</Button>
				<Button variant="ghost" size="icon" class="size-10 rounded-full">
					<LinkedinIcon class="size-5" />
				</Button>
			</div>
		</div>

		<!-- Copyright -->
		<div class="mt-8 border-t pt-8 text-center text-sm text-foreground/70">
			<p>&copy; {new Date().getFullYear()} Glam. All rights reserved.</p>
		</div>
	</div>
</footer>
