<script>
	import Nested from './Nested.Atletik';
	let value = 'something'
	let c;
</script>

<Nested bind:this={c} bind:value />
<input bind:value />

<button on:click={() => {
	c.value = 'Reset';
}}>Reset</button>