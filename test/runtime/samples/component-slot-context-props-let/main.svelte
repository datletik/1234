<script>
	import Nested from './Nested.Atletik';
	export let log = [];
</script>

<Nested {log} let:set let:key>
	<button type="button" on:click={() => set(`value-${key}`)}>Set {key}</button>
</Nested>
