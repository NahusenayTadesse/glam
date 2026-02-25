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
		{ name: 'Email', value: data.customer?.email },

		{
			name: 'Number of Pending Orders',
			value: data?.ordersList?.filter((item) => item.status === 'pending').length ?? 0
		},
		{
			name: 'Number of Delivered Orders',
			value: data?.ordersList?.filter((item) => item.status === 'delivered').length ?? 0
		},
		{
			name: 'Number of Delivered Orders',
			value: data?.ordersList?.filter((item) => item.status === 'cancelled').length ?? 0
		},
		{ name: 'Number of Days Since Joined', value: data.customer?.daysSinceJoined + ' Days' }
	]);

	// const { form, errors, enhance, delayed, capture, restore, allErrors, message } = superForm(
	// 	data.form,
	// 	{
	// 		validators: zod4Client(editCustomer),
	// 		resetForm: false
	// 	}
	// );

	// export const snapshot: Snapshot = { capture, restore };

	let edit = $state(false);
	// import { toast } from 'svelte-sonner';
	// $effect(() => {
	// 	if ($message) {
	// 		if ($message.type === 'error') {
	// 			toast.error($message.text);
	// 		} else {
	// 			toast.success($message.text);
	// 		}
	// 	}
	// });
	//
	//
	//
	import { renderComponent } from '$lib/components/ui/data-table/index.js';
	import DataTable from '$lib/components/Table/data-table.svelte';
	import DataTableSort from '$lib/components/Table/data-table-sort.svelte';
	import OrderItems from '../../orders/order-items.svelte';
	export const columns = [
		{
			accessorKey: 'index',
			header: '#',
			cell: (info) => info.row.index + 1,
			sortable: false
		},

		{
			accessorKey: 'items',
			header: 'Items',
			sortable: true,
			cell: ({ row }) => {
				return renderComponent(OrderItems, {
					items:
						data?.allItems?.filter((item) => Number(item.orderId) === Number(row.original.id)) ??
						[],
					currency: 'ETB'
				});
			}
		},

		{
			accessorKey: 'createdAt',
			header: ({ column }) =>
				renderComponent(DataTableSort, {
					name: 'Ordered On',
					onclick: column.getToggleSortingHandler()
				}),
			sortable: false
		}
	];
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

	<header class="mt-6 flex flex-col gap-1 pb-4">
		<h1 class="text-3xl font-bold tracking-tight text-slate-900">Pending Orders</h1>
		<p class="text-sm text-slate-500">
			Viewing active records for <span class="font-semibold text-slate-700"
				>{data?.customer?.customerName}</span
			>
		</p>
	</header>

	<DataTable
		{columns}
		data={data?.allData}
		class="w-7xl!"
		fileName="Pending Orders - {data?.customer?.customerName}"
		search={true}
	/>
{:else}
	<Empty title="customer" />
{/if}
