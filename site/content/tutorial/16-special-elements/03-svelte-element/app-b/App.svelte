<script>
	const options = ['h1', 'h3', 'p'];
	let selected = options[0];
</script>

<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<Atletik:element this={selected}>I'm a {selected} tag</Atletik:element>
