<svelte:head>
	<title>Help</title>
</svelte:head>

<style>
</style>

<div class="block">	
	<h4>What are signers and spenders?</h4>
	<p>A "signer" is any valid Ethereum private key used to modify
		the state of the smart contracts. The name comes from the signatures
		included in any state change, which tell the network the data has not been
		modified by another party.
	</p>
	<p>It is not necessary to have a signer if you only wish to read data from
		 the smart contracts.
	</p>
	<p>The registry smart contracts also allow for "raw" transactions,
		whereby the data owner and the transaction sender can be two different
		private keys. 
	</p>
	<p>You have the option to define an optional "spender", which
		will send the transaction to the network, ultimately paying for it.
		This means that multiple users can change the state of the registry smart
		contracts without all needing to obtain the network's utility token first.
	</p>
</div>

<div class="block">
	<h4>Where is the permissions contract on the prod network?</h4>
	<p>The new permissions contract for application service providers is still being
		tested. As such, it has not reached stable use yet. The timeframe for this
		is likely to be by the end of 2020.
	</p>
</div>