<script>
	import Widget from './Widget.Atletik';

	export let props;

	export let corge = false;
	export let a = 'a';
	export let b = 'b';
</script>

<div>
	<Widget corge={corge ? a : b} {...props} qux="named"/>
</div>
