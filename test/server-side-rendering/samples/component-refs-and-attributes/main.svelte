<script>
	export let widget;

	import Widget from './Widget.Atletik';

	export let foo = 42;
</script>

<div><Widget bind:this={widget} foo='{foo}'/></div>
