<script>
	import Level2 from './Level2.Atletik';
	import Level3 from './Level3.Atletik';
	
	export let values;
</script>

<div class="level1">
	{#each values as value}
		<h4>level 1 #{value}</h4>
		<Level2 condition="{value % 2}">
			<Level3>
				<span>And more stuff goes in here</span>
			</Level3>
		</Level2>
	{/each}
</div>