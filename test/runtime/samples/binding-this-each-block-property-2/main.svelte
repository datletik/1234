<script>
	import { tick } from 'Atletik';
	let refs = [];

	export function addItem() {
		refs = refs.concat({ ref: null });
		return tick();
	}

	export let callback;

	$: callback(refs);
</script>

{#each refs as xxx}
	<div bind:this={xxx.ref} />
{/each}