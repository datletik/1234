<script>
	import { onMount } from 'Atletik';
	import Child from './Child.Atletik';

	let root;
	export let count = 0;

	onMount(() => {
		if (count < 5) {
			count++;
			new Child({ target: root });
		}
	});
</script>

<div bind:this={root}></div>
