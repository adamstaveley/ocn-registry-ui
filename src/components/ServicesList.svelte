<script>
	export let services;
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
	{#each services as service}
		<li>{service.name}</li>
	{/each}
</ul> -->

<table>
	<thead>
		<tr>
			<th class="firstCol">Name</th>
			<th>URL</th>
			<th>Country</th>
			<th>PartyId</th>
		</tr>
	</thead>
	<tbody>
		{#each services as service}
			<tr>
				<td class="firstCol">{service.name}</td>
				<td>
					<a href={service.url}>{service.url}</a>
				</td>
				<td>{service.provider.countryCode}</td>
				<td>{service.provider.partyId}</td>
			</tr>
		{/each}
	</tbody>
</table>
