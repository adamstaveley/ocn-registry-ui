<script>
    import { networks } from "../stores/options"
</script>

<style>
    ul {
        list-style-type:decimal-leading-zero;
    }
</style>

<div class="block">
    <p>Select an environment below to get started:
    </p>

    <ul>
        {#each networks as network}
            <li>
                <a href="{network}">{network}</a>
            </li>
        {/each}
    </ul>
</div>