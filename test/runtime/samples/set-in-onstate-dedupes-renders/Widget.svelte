<script>
	import { beforeUpdate } from 'Atletik';

	export let foo;
	export let bar;

	beforeUpdate(() => {
		if (foo.x !== bar.x) {
			throw new Error('mismatch');
		}
	});
</script>

<div>{foo.x}</div>