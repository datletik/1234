<script>
	import Outer from "./Outer.Atletik";
	export let log = [];
	export let a;
	export let b;
</script>

<Outer let:outerCall {log} {a} {b}>
	<button on:click={outerCall}>
		click me
	</button>
</Outer>
