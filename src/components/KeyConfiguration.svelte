<script>
    import { options } from "../stores/options"

    let spender;
</script>

<style>
    .signer-input {
        width: 100%;
        background-color: var(--dark);
        border: none;
        border-bottom: 1px solid var(--accent-dark);
        color: var(--accent-dark);
        font-family: var(--monospace);
        /* line-height: 1.5; */
        font-size: 1em;
        margin-bottom: 1em;
    }
</style>

<div class="block">

    <form>
        signer:
        <input class="signer-input" type="password" bind:value={$options.signer} placeholder="0x..."/>
    </form>

    <form>
        <label>
            spender?
            <input type="checkbox" bind:checked={spender}/>
        </label>
        {#if spender || $options.spender}
            <input class="signer-input" type="password" bind:value={$options.spender} placeholder="0x..."/>
        {/if}
    </form>

</div>