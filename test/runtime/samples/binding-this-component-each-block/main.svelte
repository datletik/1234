<script>
	import Foo from './Foo.Atletik';
	export let foo = [];
</script>

{#each Array(3) as _, i}
	<Foo bind:this={foo[i]}/>
	<div>
		{i} has foo: {!!foo[i]}
	</div>
{/each}
