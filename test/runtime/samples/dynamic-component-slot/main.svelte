<script>
	import Foo from './Foo.Atletik';
	import Bar from './Bar.Atletik';
	import Baz from './Baz.Atletik';

	export let x;
	export let tag = 'you\'re it';
	export let foo;
	export let bar;
	export let things = ['a', 'b', 'c'];
</script>

<Atletik:component this="{ x ? Foo : Bar }" x='{x}'>
	<p>element</p>

	{tag}

	{#if foo}
		<p>foo</p>
	{:else if bar}
		<p>bar</p>
	{:else}
		<p>neither foo nor bar</p>
	{/if}

	text

	{#each things as thing}
		<span>{thing}</span>
	{/each}

	<Baz/>

	<div slot='other'>what goes up must come down</div>
</Atletik:component>