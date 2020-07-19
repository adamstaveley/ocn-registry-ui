<svelte:head>
	<title>Help</title>
</svelte:head>

<style>
</style>

<div class="block">	
	<h4>What are signers and spenders?</h4>
	<p>The registry smart contracts allow for the use of "raw" transactions,
		whereby the data owner and the transaction sender can be two different
		private keys. 
	</p>
	<p>You have the option to define an optional "spender", which
		will send the transaction to the network, ultimately paying for it.
		This means that multiple users can change the state of the registry smart
		contracts without all needing to obtain the network's utility token first.
	</p>
</div>