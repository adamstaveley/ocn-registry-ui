<script>
	export let services;
	services = services.sort((a, b) => a.countryCode > b.countryCode)
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

{#if services && services.length > 0}
<table>
	<thead>
		<tr>
			<th class="firstCol">Credentials</th>
			<th>Name</th>
			<th>URL</th>
		</tr>
	</thead>
	<tbody>
		{#each services as service}
			<tr>
				<td class="firstCol">{service.provider.countryCode}:{service.provider.partyId}</td>
				<td>{service.name}</td>
				<td>
					<a href={service.url}>{service.url}</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
{:else}
<div class="contract-data-help-text">
	<p>No data found.</p>
</div>
{/if}
