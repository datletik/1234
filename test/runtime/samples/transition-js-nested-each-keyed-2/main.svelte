<script>
	export let x;
	export let things;

	import Widget from './Widget.Atletik';
</script>

{#if x}
	<Widget {things}/>
{/if}