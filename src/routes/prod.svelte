<script>
    import NetworkDetailConfiguration from "../components/NetworkDetailConfiguration.svelte";
    import KeyConfiguration from "../components/KeyConfiguration.svelte";
    import NetworkView from "../components/NetworkView.svelte";
</script>

<svelte:head>
    <title>Prod Network</title>
</svelte:head>

<NetworkDetailConfiguration name="prod" rpc="https://rpc.energyweb.org" registry="0x5647382910" />
<KeyConfiguration/>
<NetworkView/>