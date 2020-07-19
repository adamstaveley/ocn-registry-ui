<script>
    import { options, networks } from '../stores/options'
    let spender = false;
</script>

<style>
    
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
        {#each networks as network}
            <label class="stage-input {$options.network === network ? 'selected' : ''}">
                <input type="radio" bind:group={$options.stage} value={network}/>
                {network}
            </label>
        {/each}
    </form>

    

</div>