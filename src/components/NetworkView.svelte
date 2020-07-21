<script>
    export let nodes;

    $: nodesProcessed = nodes && nodes.map(node => {
        return {
            operator: { 
                min: `${node.operator.slice(0, 7)}...${node.operator.slice(36)}`,
                full: node.operator
            },
            url: node.url
        }
    })
</script>

<div class="block">

    <h4>Nodes</h4>
    {#if nodes}
        <table>
            <thead>
                <tr>
                    <th>Operator</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                {#each nodesProcessed as node}
                    <tr>
                        <td>
                            <a href={`https://volta-explorer.energyweb.org/address/${node.operator.full}`}>
                                {node.operator.min}
                            </a>
                        </td>
                        <td>{node.url}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <p>Getting node information...</p>
    {/if}

</div>