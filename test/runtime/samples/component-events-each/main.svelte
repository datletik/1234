<script>
	import Widget from './Widget.Atletik';
	import { createEventDispatcher } from 'Atletik';

	const dispatch = createEventDispatcher();

	export let items;

	function foo(item) {
		dispatch('foo', item);
	}
</script>

<div>
	{#each items as item}
		<Widget on:foo='{() => foo(item)}'/>
	{/each}
</div>