<script>
	import { onMount } from 'Atletik';

	export let foo = 1;
	export let bar;
	export let _class;

	onMount(() => {
		foo = undefined;
	});
</script>

<div {foo} {bar} class={_class} draggable='false'></div>
