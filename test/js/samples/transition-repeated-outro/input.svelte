<script>
	import { fade } from 'Atletik/transition';

	export let num = 1;
</script>

{#if num < 5}
	<div out:fade>
		<p>wheeee</p>
	</div>
{/if}