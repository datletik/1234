<script>
	import Widget from './Widget.Atletik';

	export let foo = false;
	export let q;
</script>

{#if foo}
	<Widget p='{q}'/>
{/if}