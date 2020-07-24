<script context="module"> 
    // this runs server-side, allowing us to render a dynamic page
    
    import { networks } from '../data/networks'

    // This function is used by Sapper to fetch data to render the dynamic page.
    // We receive the network_name in the dynamic endpoint (i.e. /test or /prod) 
    // and use it to find the parameters of the network we pre-configured
    export async function preload(page, _) {
        const { network_name } = page.params
        const params = networks.find(network => network.name === network_name)
        if (!params) {
            throw Error("Network page does not exist")
        }
        return { params }
    }

</script>

<script>
    // this runs client-side, so we can fetch data lazily once the page has loaded

    import { onMount } from 'svelte'
    import { fetchNodes, fetchParties, fetchServices } from '../services/data.service'
    import NetworkDetail from "../components/NetworkDetail.svelte";
    import ContractData from "../components/ContractData.svelte";

    export let params

    let data = {}

    // our lazy-loading of smart contract data will update the above variables and
    // cause a page re-render
    onMount(async () => {
        data.nodes = await fetchNodes(params.stage)
        data.parties = await fetchParties(params.stage)
        if (params.permissions) {
            data.services = await fetchServices(params.stage)
        }
        console.log('onMount finished:', data)
    })
</script>

<svelte:head>
    <title>{params.name[0].toUpperCase() + params.name.slice(1)} Network</title>
</svelte:head>

<NetworkDetail {...params} />

<svelte:component 
    this={ContractData} 
    {...data} 
    stageHasServices={params.permissions !== undefined}
    explorer={params.explorer} />
