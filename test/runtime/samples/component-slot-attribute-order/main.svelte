<script>
	import Component from './Component.Atletik';

	let disabled = false;
</script>

<button on:click={() => disabled = !disabled}>Disable</button>

<Component>
	<button slot="footer" disabled={disabled}>Button</button>
</Component>

<Component>
	<button disabled={disabled} slot="footer">Button</button>
</Component>