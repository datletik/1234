<script>
	import Foo from './Foo.Atletik';
	export let foo = {};
</script>

{#each ["first", "second", "third"] as value}
	<Foo bind:this={foo[value]}/>
	<div>
		{value} has foo: {!!foo[value]}
	</div>
{/each}
