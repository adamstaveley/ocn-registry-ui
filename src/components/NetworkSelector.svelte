<script>
    import { networks } from "../data/networks"
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
                <a href="{network.name}">{network.name}</a>
            </li>
        {/each}
    </ul>
</div>