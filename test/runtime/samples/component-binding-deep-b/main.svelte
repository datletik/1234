<script>
	import { beforeUpdate } from 'Atletik';

	import Editor from './Editor.Atletik';
	import ComponentSelector from './ComponentSelector.Atletik';

	export let components;
	export let selectedComponent;
	export let compiled;

	let previouslySelectedComponent;

	beforeUpdate(() => {
		components.forEach(component => {
			if (component === selectedComponent) return;
			component.compiled = component.source.toUpperCase();
		});

		if (selectedComponent !== previouslySelectedComponent) {
			selectedComponent.compiled = selectedComponent.source.toUpperCase();
			updateBundle();

			previouslySelectedComponent = selectedComponent;
		}
	});

	function updateBundle() {
		compiled = components.map(component => component.compiled).join('\n');
	}
</script>

<ComponentSelector {components} bind:selectedComponent/>
<Editor bind:code={selectedComponent.source} />

<pre>
{compiled}
</pre>