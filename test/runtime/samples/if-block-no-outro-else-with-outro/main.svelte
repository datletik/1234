<script>
	export let foo;
	export let x = 'x';

	import Widget from './Widget.Atletik';
</script>

{#if foo}
	<p>foo</p>
{:else}
	<Widget/>
	<p>{x}</p>
	<input type="text" bind:value={x} />
{/if}