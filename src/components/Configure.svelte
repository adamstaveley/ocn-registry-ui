<script>
    import { options, stages } from '../stores/options'
</script>

<style>
    .stage-input {
        cursor: pointer;
        
    }
</style>

<div class="block">
    <h4>environment</h4>

    {#each stages as stage}
        <label class="stage-input">
            <input type="radio" bind:group={$options.stage} value={stage}/>
            {stage}
        </label>
    {/each}

</div>