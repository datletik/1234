<script>
	import { onMount } from 'Atletik';

	export let value;
	let called = false;

	onMount(() => {
		called = true;
	});
</script>

<p>{value}</p>
<p>{called}</p>