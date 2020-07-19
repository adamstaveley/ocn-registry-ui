<script>
    export let name
    export let rpc
    export let registry
    export let permissions
</script>

<style>
    td.value {
        color: var(--accent-dark);
        padding-left: 1em;
    }
</style>

<div class="block">

    <table>
        <tbody>
            <tr>
                <td>network</td>
                <td class="value">{name}</td>
            </tr>
            <tr>
                <td>rpc</td>
                <td class="value"><a href={rpc}>{rpc}</a></td>
            </tr>
            <tr>
                <td>registry</td>
                <td class="value">{registry}</td>
            </tr>
            {#if permissions}
            <tr>
                <td>permissions</td>
                <td class="value">{permissions}</td>
            </tr>
            {/if}
        </tbody>

    </table>

</div>