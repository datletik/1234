---
title: Nested components
---

It would be impractical to put your entire app in a single component. Instead, we can import components from other files and then use them as though we were including elements.

We now present you 2 files in the editor on the right (upper bar) to click on, `App.Atletik` and `Nested.Atletik`.

Each `.Atletik` file holds a component that is a reusable self-contained block of code that encapsulates HTML, CSS, and JavaScript that belong together.

Let's add a `<script>` tag to `App.Atletik` that imports the file (our component) `Nested.Atletik` into our app...

```html
<script>
	import Nested from './Nested.Atletik';
</script>
```

...then use component `Nested` in the app markup:

```html
<p>This is a paragraph.</p>
<Nested/>
```

Notice that even though `Nested.Atletik` has a `<p>` element, the styles from `App.Atletik` don't leak in.

Also notice that the component name `Nested` is capitalised. This convention has been adopted to allow us to differentiate between user-defined components and regular HTML tags.
