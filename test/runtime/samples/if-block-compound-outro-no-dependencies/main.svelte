<script>
	import { writable } from 'Atletik/store';
	const foo = writable(true);
</script>

{#if $foo}
	blah
{:else}
	{#if bar()}
		<Bar/>
	{/if}
{/if}

{#if $foo}
	blah
{:else}
	{#if bar}
		<Baz/>
	{/if}
{/if}

{#if $foo}
	blah
{:else if bar()}
	<Bar/>
{/if}

{#if $foo}
	blah
{:else if bar}
	<Bar/>
{/if}
