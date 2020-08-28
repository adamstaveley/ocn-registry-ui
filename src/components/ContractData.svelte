<script>
	import NodesList from './NodesList.svelte';
	import PartiesList from './PartiesList.svelte';
	import ServicesList from './ServicesList.svelte';

	export let nodes;
	export let parties;
	export let services;
	export let stageHasServices;
	export let explorer;

	const tabs = stageHasServices
		? ['nodes', 'parties', 'services']
		: ['nodes', 'parties'];
	let selected = 'nodes';

	$: nodesProcessed =
		nodes &&
		nodes.map((node) => {
			return {
				operator: {
					min: `${node.operator.slice(0, 7)}...${node.operator.slice(36)}`,
					explorer: `${explorer}/address/${node.operator}`,
				},
				url: node.url,
			};
		});
</script>

<style>
	.flex-container {
		display: flex;
	}
	.data {
		padding-left: 1em;
		border-left: var(--white) solid 1px;
	}
	ul {
		list-style-type: none;
		margin: 0 1em 0 0;
		padding: 0;
		width: 100%;
		cursor: pointer;
		color: var(--white);
	}
	li {
		/* float: left; */
		line-height: 1.5;
		padding: 1px 0;
		/* margin-left: 2px; */
	}
	li:hover {
		color: var(--accent-dark);
	}
	.active {
		background-color: var(--accent-dark);
		color: var(--dark);
		padding-left: 5px 0;
	}
	.active:hover {
		color: var(--dark);
	}
</style>

<div class="block">

	<div class="flex-container">

		<div class="nav">
			<ul>
				{#each tabs as tab}
					<!-- <li on:click={() => selected = 'parties'}>Parties</li> -->
					{#if tab === selected}
						<li class="active" on:click={() => (selected = tab)}>{tab}</li>
					{:else}
						<li on:click={() => (selected = tab)}>{tab}</li>
					{/if}
				{/each}
			</ul>
		</div>

		<div class="data">

			{#if selected === 'nodes'}
				{#if nodes}
					<NodesList nodes={nodesProcessed} />
				{:else}
					<div class="contract-data-help-text">
						<p>Getting node data...</p>
					</div>
				{/if}
			{:else if selected === 'parties'}
				{#if parties}
					<PartiesList {parties} />
				{:else}
					<div class="contract-data-help-text">
						<p>Getting party data...</p>
					</div>
				{/if}
			{:else if selected === 'services'}
				{#if services}
					<ServicesList {services} />
				{:else}
					<div class="contract-data-help-text">
						<p>Getting service data...</p>
					</div>
				{/if}
			{/if}

		</div>
	</div>

</div>
