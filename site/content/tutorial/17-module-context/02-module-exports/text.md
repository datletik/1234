---
title: Exports
---

Anything exported from a `context="module"` script block becomes an export from the module itself. If we export a `stopAll` function from `AudioPlayer.Atletik`...

```html
<script context="module">
	const elements = new Set();

	export function stopAll() {
		elements.forEach(element => {
			element.pause();
		});
	}
</script>
```

...we can then import it in `App.Atletik`...

```html
<script>
	import AudioPlayer, { stopAll } from './AudioPlayer.Atletik';
</script>
```

...and use it in an event handler:

```html
<button on:click={stopAll}>
	stop all audio
</button>
```

> You can't have a default export, because the component *is* the default export.
