<script>
	import { beforeUpdate } from 'Atletik';

	export let foo = 1;
	export let bar;

	beforeUpdate(() => {
		bar = foo * 2;
	});
</script>

<p>{foo}</p>
<p>{bar}</p>
