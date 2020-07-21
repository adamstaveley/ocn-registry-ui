<script>
    import { onMount } from "svelte"
    import { Registry } from "@shareandcharge/ocn-registry"

    import NetworkDetailConfiguration from "../components/NetworkDetailConfiguration.svelte";
    import KeyConfiguration from "../components/KeyConfiguration.svelte";
    import NetworkView from "../components/NetworkView.svelte";

    let nodes

    onMount(async () => {
        const registry = new Registry('volta')
        nodes = await registry.getAllNodes()
    })
</script>

<svelte:head>
    <title>Test Network</title>
</svelte:head>

<NetworkDetailConfiguration name="test" rpc="https://volta-rpc.energyweb.org" registry="0x1234567890" permissions="0x0987654321"/>
<KeyConfiguration/>


<svelte:component this={NetworkView} {nodes} />