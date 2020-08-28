<script>
	import tippy from "sveltejs-tippy";

	export let parties;
	parties = parties.sort((a, b) => a.countryCode > b.countryCode)

	const getNodeTooltipProps = (node) => {
		return {
			content: node.url,
			placement: 'bottom-start'
		}
	}
</script>

<style>
	th {
		text-align: left;
	}
	th {
		padding-left: 20px;
	}
	td {
		padding-left: 20px;
	}
	.firstCol {
		padding-left: 0px !important;
	}
	:global(.tooltip) {
		background-color: var(--dark);
	}
	.node {
		color: var(--accent-dark);
	}
</style>

<table>
	<thead>
		<tr>
			<th class="firstCol">Credentials</th>
			<th>Roles</th>
			<th>Node</th>
		</tr>
	</thead>
	<tbody>
		{#each parties as party}
			<tr>
				<td class="firstCol">{party.countryCode}:{party.partyId}</td>
				<td>{party.roles}</td>
				<td class="node" use:tippy={getNodeTooltipProps(party.node)}>
					{party.node.operator.slice(0, 7)}...{party.node.operator.slice(36)}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
