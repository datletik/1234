<Atletik:options immutable={false}/>

<script>
	export let count = 0;
	export let foo = { bar: 'baz' };

	$: if (foo) count += 1;
</script>

<div>
	<h3>Called {count} times.</h3>
</div>
