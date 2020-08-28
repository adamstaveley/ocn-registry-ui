<script>
	export let parties;
	parties = parties.sort((a, b) => a.countryCode > b.countryCode)

	const displayNodeInfo = (event, node) => {
		console.log('mouseover', event.x, event.y, 'on', node)
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
</style>

<!-- <ul>
	{#each parties as party}
		<li>
			{party.countryCode} {party.partyId} {party.roles} {party.node.operator}
		</li>
	{/each}
</ul> -->

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
				<td onmouseover={(event) => displayNodeInfo(event, party.node)}>
					{party.node.operator.slice(0, 7)}...{party.node.operator.slice(36)}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
