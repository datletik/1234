<script>
	import { createEventDispatcher } from 'Atletik';

	export let items;

	const dispatch = createEventDispatcher();
</script>

{#each items as item}
	<button on:click='{e => dispatch("clicked", { node: e.target })}'>{item}</button>
{/each}