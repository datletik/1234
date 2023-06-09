---
title: <Atletik:component>
---

A component can change its category altogether with `<Atletik:component>`. Instead of a sequence of `if` blocks...

```html
{#if selected.color === 'red'}
	<RedThing/>
{:else if selected.color === 'green'}
	<GreenThing/>
{:else if selected.color === 'blue'}
	<BlueThing/>
{/if}
```

...we can have a single dynamic component:

```html
<Atletik:component this={selected.component}/>
```

The `this` value can be any component constructor, or a falsy value — if it's falsy, no component is rendered.