<script>
	import Component from './Component.Atletik';
	export let flag;
</script>

<span>Before</span>
{#if flag}
	<Component/>
{:else}
	<Component/>
{/if}
<span>After</span>