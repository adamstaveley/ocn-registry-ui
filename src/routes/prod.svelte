<script>
    import { onMount } from "svelte"
    import { Registry } from "@shareandcharge/ocn-registry"

    import NetworkDetailConfiguration from "../components/NetworkDetailConfiguration.svelte";
    import KeyConfiguration from "../components/KeyConfiguration.svelte";
    import NetworkView from "../components/NetworkView.svelte";

    let nodes

    onMount(async () => {
        const registry = new Registry('prod')
        nodes = await registry.getAllNodes()
    })
</script>

<svelte:head>
    <title>Prod Network</title>
</svelte:head>

<NetworkDetailConfiguration name="prod" rpc="https://rpc.energyweb.org" registry="0x5647382910" />
<KeyConfiguration/>

<svelte:component this={NetworkView} {nodes} />
