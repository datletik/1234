<script>
	import Nested from './Nested.Atletik';

	export let titles;
</script>

{#each titles as title (title.name)}
	<Nested title="{title.name}"/>
{/each}