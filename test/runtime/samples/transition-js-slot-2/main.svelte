<script>
	import Nested from './Nested.Atletik';

	let name = 'Foo';
	let visible = true;

	export function show() {
		visible = true;
	}
	export function hide() {
		visible = false;
		name = 'Bar';
	}
</script>

<Nested {visible}>
	{name}
</Nested>
