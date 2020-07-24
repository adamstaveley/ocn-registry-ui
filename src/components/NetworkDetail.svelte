<script>
    export let name
    export let rpc
    export let explorer
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
                <td>explorer</td>
                <td class="value"><a href={explorer}>{explorer}</a></td>
            </tr>
            <tr>
                <td>registry</td>
                <td class="value"><a href={`${explorer}/address/${registry}`}>{registry}</a></td>
            </tr>
            {#if permissions}
            <tr>
                <td>permissions</td>
                <td class="value"><a href={`${explorer}/address/${permissions}`}>{permissions}</a></td>
            </tr>
            {/if}
        </tbody>

    </table>

</div>