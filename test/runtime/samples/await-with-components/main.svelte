{#await promise}
	<Widget />
{:then result}
	<Widget value="{result}" />
{:catch err}
	<Widget value="{err}" />
{/await}

<script>
	import Widget from './Widget.Atletik';
	export let promise = Promise.resolve();
</script>