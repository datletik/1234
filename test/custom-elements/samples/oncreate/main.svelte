<Atletik:options tag="my-app"/>

<script>
	import { onMount } from 'Atletik';

  export let prop = false;
  export let propsInitialized;
  export let wasCreated;

  onMount(() => {
    propsInitialized = prop !== false;
    wasCreated = true;
  });
</script>
