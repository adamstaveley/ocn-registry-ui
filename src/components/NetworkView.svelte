<script>
    export let nodes;

    $: nodesProcessed = nodes && nodes.map(node => {
        return {
            operator: { 
                min: `${node.operator.slice(0, 7)}...${node.operator.slice(36)}`,
                explorer: `https://volta-explorer.energyweb.org/address/${node.operator}`
            },
            url: node.url
        }
    })
</script>

<style>
    th {
        text-align: left;
    }
    .url {
        padding-left: 1em;
    }
</style>

<div class="block">

    {#if nodes}
        <table>
            <thead>
                <tr>
                    <th>Operator</th>
                    <th class="url">URL</th>
                </tr>
            </thead>
            <tbody>
                {#each nodesProcessed as node}
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
        <p>Getting node information...</p>
    {/if}

</div>