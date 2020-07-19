<script>
	export let segment;
</script>

<style>
	nav {
		font-weight: 300;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		color: var(--accent-dark);
	}

	a {
		text-decoration: none;
		/* padding: 1em 0.5em; */
		display: block;
		color: var(--white);
	}

	.nav-help-link {
		float: right;
	}
</style>

<nav>
	<ul class="block">
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">ocn registry ui</a></li>
		<li class="nav-help-link"><a aria-current="{segment === 'help' ? 'page' : undefined}" href="help">help</a></li>
	</ul>
</nav>
