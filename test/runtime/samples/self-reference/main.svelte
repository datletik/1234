<script>
	export let depth;
</script>

<span>{depth}</span>
{#if depth > 0}
	<Atletik:self depth='{depth - 1}'/>
{/if}