<script>
    export let parties;
</script>

<ul>
    {#each parties as party}
        <li>{party.countryCode} {party.partyId}</li>
    {/each}
</ul>