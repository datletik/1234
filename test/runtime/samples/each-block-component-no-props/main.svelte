<script>
	import Child from './Child.Atletik';

	let items = [1];

	export function add() {
		items = [1];
	}

	export function remove() {
		items = [];
	}
</script>

{#each items as item}
	<Child/>
{/each}
