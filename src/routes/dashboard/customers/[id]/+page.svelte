<script lang="ts">
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import { editCustomer } from '$lib/Zodschema';

	let { data } = $props();

	import SingleTable from '$lib/components/SingleTable.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { superForm } from 'sveltekit-superforms/client';

	import { ArrowLeft, Pencil, Save } from '@lucide/svelte';
	import type { Snapshot } from '@sveltejs/kit';
	import SelectComp from '$lib/formComponents/SelectComp.svelte';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { gender } from '$lib/global.svelte';
	import LoadingBtn from '$lib/formComponents/LoadingBtn.svelte';
	import Delete from '$lib/forms/Delete.svelte';
	import Empty from '$lib/components/Empty.svelte';
	import SingleView from '$lib/components/SingleView.svelte';
	import Errors from '$lib/formComponents/Errors.svelte';

	let count = $derived((data.customer?.orderCount ?? 0) > 1 ? ' Pending Orders' : ' Pending Order');

	let singleTable = $derived([
		{ name: 'Name', value: data.customer?.customerName },
		{ name: 'Phone', value: data.customer?.phone },

		{ name: 'Number of Pending Orders', value: data.customer?.orderCount + count },
		{ name: 'Number of Days Since Joined', value: data.customer?.daysSinceJoined + ' Days' }
	]);

	// const { form, errors, enhance, delayed, capture, restore, allErrors, message } = superForm(
	// 	data.form,
	// 	{
	// 		validators: zod4Client(editCustomer),
	// 		resetForm: false
	// 	}
	// );

	export const snapshot: Snapshot = { capture, restore };

	let date = $derived(dateProxy(editForm, 'appointmentDate', { format: 'date' }));

	let edit = $state(false);
	import { toast } from 'svelte-sonner';
	$effect(() => {
		if ($message) {
			if ($message.type === 'error') {
				toast.error($message.text);
			} else {
				toast.success($message.text);
			}
		}
	});
</script>

<svelte:head>
	<title>Customer Details</title>
</svelte:head>

{#if data?.customer}
	<SingleView title="Customer Details">
		<div class="mt-4 flex w-full flex-row items-start justify-start gap-2 pl-4">
			<Button onclick={() => (edit = !edit)}>
				{#if !edit}
					<Pencil class="h-4 w-4" />
					Edit
				{:else}
					<ArrowLeft class="h-4 w-4" />

					Back
				{/if}
			</Button>

			<Delete redirect="/dashboard/customers" />
		</div>
		{#if edit === false}
			<div class="w-full p-4"><SingleTable {singleTable} /></div>
		{/if}
	</SingleView>
	<!-- {#if data.reciepts?.length}
		<div
			class="mt-4 flex w-full flex-col items-center justify-center
   rounded-md bg-white shadow-lg lg:w-full dark:bg-black dark:shadow-md dark:shadow-gray-900"
		>
			<div
				class="from-dark flex w-full flex-col items-center justify-center rounded-lg bg-gradient-to-r to-black px-8 py-6 text-white"
			>
				<h1 class="text-center">Booking Fee Paids</h1>
			</div>

			<div class="flex flex-col mt-4 w-full">
		<DataTable data={data.reciepts} {columns} {search}  />

	 </div>
		</div>
	{/if} -->
{:else}
	<Empty title="customer" />
{/if}
