<script>
	import Nested from './Nested.Atletik';

	export let fields = ['firstname', 'lastname'];
	export let values = {
		firstname: '',
		lastname: ''
	};
</script>

{#each fields as field}
	<Nested {field} bind:value={values[field]}/>
{/each}