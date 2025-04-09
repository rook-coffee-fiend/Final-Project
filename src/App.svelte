<script>
  import Chapter1 from './lib/Chapter1.svelte';
  import Chapter2 from './lib/Chapter2.svelte';


  const pages = [
		Chapter1,
		Chapter2,
	];

  import Scroller from './lib/Scroller.svelte';
 
  let count;  // total sections in scroller
	let index;  // which section number is currently active (starts at 1)
	let offset;  // how far through the current section you have scrolled (0 to 1)
	let progress; // how far through the whole scroller you have gone (0 to 1) 
	let top = 0; // how far from top of screen is fixed background
	let threshold = 0.5; // how far onto a scren next section must come before count increments to next
	let bottom = 0.9; // how far from bottom of screen fixed area ends

</script>

<main>
  
  <Chapter1>
	
  </Chapter1>

<style>
	h2 {
		margin: 0.5rem 0;	
	}
	
	[slot="background"] {
		background-color: rgba(255,62,0,0.05);
		border-top: 2px solid #ff3e00;
		border-bottom: 2px solid #ff3e00;
		overflow: hidden;
		padding: 1em;
		p {
			margin: 0;
			font-size: 1rem;
		}
	}

	/* allow ONLY the <section> tags to receive clicks, hovers, and other points events */
	[slot="foreground"] {
		pointer-events: none;
		section {
			pointer-events: all;
		}
	}
	
	section {
		height: 80vh; /* make each scrolling "slide" 80% of the vertical screen height */
		background-color: rgba(0,0,0,0.2);
		color: white;
		padding: 1em;
		margin: 0 0 1em 0;
		p {
			width: 500px;
			background-color: rgba(0,0,0,0.8);
			padding: 1rem;
			margin-top: 100%; /* center it vertically */
			margin-left: auto; /* center it horizontally */
			margin-right: auto;
		}
	}
</style>

</main>

<!--
<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
-->