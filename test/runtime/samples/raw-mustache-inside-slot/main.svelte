<script>
	import Component from './Component.Atletik';

	let content1 = `<p>First line</p>`;
	let content2 = `<p>Another first line</p>`

	let show = false;
	$: content = show ? content1 : content2;
</script>

<button on:click={() => show = !show}>
	Switch
</button>

<Component>
	{@html content}
</Component>