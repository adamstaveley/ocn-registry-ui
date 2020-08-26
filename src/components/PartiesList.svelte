<script>
	export let parties;
	console.log(parties);
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
			<th class="firstCol">Node</th>
			<th>Country</th>
			<th>PartyId</th>
			<th>Role</th>
		</tr>
	</thead>
	<tbody>
		{#each parties as party}
			<tr>
				<td class="firstCol">
					<a href={party.node.url}>
						{party.node.operator.slice(0, 7)}...{party.node.operator.slice(36)}
					</a>
				</td>
				<td>{party.countryCode}</td>
				<td>{party.partyId}</td>
				<td>{party.roles}</td>
			</tr>
		{/each}
	</tbody>
</table>
