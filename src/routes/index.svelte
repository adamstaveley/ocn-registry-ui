<script>
	import Configure from "../components/Configure.svelte";
	import { options } from "../stores/options"
</script>

<style>
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<Configure/>

<div class="block">
	<h2>Interact with the registry</h2>

	<p>You are using {$options.stage} as your environment.</p>
	<p>You sign your data with the private key {$options.signer}</p>
	<p>You pay for transactions with private key {$options.spender}</p>
</div>
