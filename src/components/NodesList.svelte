<script>
    export let nodes
</script>

<style>
    th {
        text-align: left;
    }
    .url {
        padding-left: 1em;
    }
</style>

{#if nodes && nodes.length > 0}
<table>
    <thead>
        <tr>
            <th>Operator</th>
            <th class="url">URL</th>
        </tr>
    </thead>
    <tbody>
        {#each nodes as node}
            <tr>
                <td>
                    <a href={node.operator.explorer}>
                        {node.operator.min}
                    </a>
                </td>
                <td class="url">{node.url}</td>
            </tr>
        {/each}
    </tbody>
</table>
{:else}
<div class="contract-data-help-text">
	<p>No data found.</p>
</div>
{/if}