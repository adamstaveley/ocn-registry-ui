<script>
	import About from "../components/About.svelte";
	import Configure from "../components/Configure.svelte";
	import StageSelector from "../components/NetworkSelector.svelte";
	import { stages } from "../stores/options"
</script>

<style>
</style>

<svelte:head>
	<title>OCN Registry UI</title>
</svelte:head>

<About/>

<StageSelector/>
