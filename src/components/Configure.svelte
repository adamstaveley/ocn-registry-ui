<script>
    import { options, stages } from '../stores/options'
    let spender = false;
</script>

<style>
    form {
        margin: 1em 0;
    }
    .stage-input {
        cursor: pointer;
    }
    .stage-input.selected {
        color: var(--accent-dark);
    }
    .signer-input {
        width: 100%;
        background-color: var(--dark);
        border: none;
        border-bottom: 1px solid var(--accent-dark);
        color: var(--accent-dark);
        font-family: var(--monospace);
        /* line-height: 1.5; */
        font-size: 1em;
    }
</style>

<div class="block">
    
    <form>
        environment:
        {#each stages as stage}
            <label class="stage-input {$options.stage === stage ? 'selected' : ''}">
                <input type="radio" bind:group={$options.stage} value={stage}/>
                {stage}
            </label>
        {/each}
    </form>

    <form>
        signer
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