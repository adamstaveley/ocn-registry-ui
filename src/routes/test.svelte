<script>
    import NetworkDetailConfiguration from "../components/NetworkDetailConfiguration.svelte";
    import KeyConfiguration from "../components/KeyConfiguration.svelte";
    import NetworkView from "../components/NetworkView.svelte";
</script>

<svelte:head>
    <title>Test Network</title>
</svelte:head>

<NetworkDetailConfiguration name="test" rpc="https://volta-rpc.energyweb.org" registry="0x1234567890" permissions="0x0987654321"/>
<KeyConfiguration/>
<NetworkView/>