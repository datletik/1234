<script>
	import Nested from './Nested.Atletik';
	let nested;
</script>

<button on:click={nested && nested.updateText}>Click Me</button>

<Nested bind:this={nested} />
