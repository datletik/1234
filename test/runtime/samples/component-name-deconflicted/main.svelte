<script>
	import Nested from './Nested.Atletik';

	export let list = [1, 2];
</script>

{#each list as nested}
	{#if true}
		<Nested {nested}/>
	{/if}
{/each}