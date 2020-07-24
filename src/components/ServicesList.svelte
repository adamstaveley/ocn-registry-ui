<script>
    export let services
</script>

<ul>
    {#each services as service}
        <li>{service.name}</li>
    {/each}
</ul>
