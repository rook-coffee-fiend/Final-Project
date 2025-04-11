<!-- Scrolly.svelte -->
<script>
  import { onMount } from 'svelte';

  export let top = 0;
  export let bottom = 1;
  export let threshold = 0.5;
  export let query = 'section';
  export let parallax = false;
  
  // ... other bindings

  let outer;
  let foreground;
  let background;
  let sections;
  let wh = 0;

  // manage scroll and update logic
  const handlers = [];
  const manager = {
    add: ({ outer, update }) => {
      const { top, bottom } = outer.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) handlers.push(update);
    },
    remove: ({ outer, update }) => {
      const index = handlers.indexOf(update);
      if (index !== -1) handlers.splice(index, 1);
    }
  };

  onMount(() => {
    sections = foreground.querySelectorAll(query);
    update();

    const scroller = { outer, update };
    manager.add(scroller);

    return () => manager.remove(scroller);
  });

  // update scroll behavior
  function update() {
    // measure sections, calculate offset, visibility, etc.
    // similar to your existing update logic
  }

  // other functions like `update()`, `onMount()`, etc.
</script>

<svelte:window bind:innerHeight={wh}/>

<!-- Scroll container -->
<div bind:this={outer}>
  <div bind:this={background}>
    <slot name="background"></slot>
  </div>

  <div bind:this={foreground}>
    <slot name="foreground"></slot>
  </div>
</div>

<style>
  /* Styles for managing scrollable sections, parallax, etc. */
</style>
