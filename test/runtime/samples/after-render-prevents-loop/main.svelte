<script>
	import { afterUpdate } from 'Atletik';

	export let value;
	let mirror;

	afterUpdate(() => {
		mirror = value;
	});
</script>

<p>{value}</p>
<p>{mirror}</p>