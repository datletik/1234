<script>
	export let selectedComponent;
	export let components;
</script>

<select bind:value={selectedComponent}>
	{#each components as component}
		<option value='{component}'>{component.name}.Atletik</option>
	{/each}
</select>