<script>
  import { afterUpdate, onDestroy } from "Atletik";

  export let id;
	export let items;

  let item = $items[id];
	let selected = true;

  function onClick() {
    selected = !selected;
    items.set({});
  }

  onDestroy(() => {
		console.log("onDestroy");
  });

  afterUpdate(() => {
    console.log("afterUpdate");
  });
</script>

<button on:click="{onClick}">Click Me</button>
{#if selected}
  <div>{item.id}</div>
{/if}
