<script>
  import Chapter1 from './lib/Chapter1.svelte';
  import Chapter2 from './lib/Chapter2.svelte';
  import NavBar from './lib/NavBar.svelte';


  const pages = [
		Chapter1,
		Chapter2,
	];

	//commented out the following because I turned Scroller into Scrolly? And merged what Scrolly does with Ch1??? I think? 

	//import Scroller from './lib/DELETEScroller.svelte';
 
  let count;  // total sections in scroller
	let index;  // which section number is currently active (starts at 1)
	let offset;  // how far through the current section you have scrolled (0 to 1)
	let progress; // how far through the whole scroller you have gone (0 to 1) 
	let top = 0; // how far from top of screen is fixed background
	let threshold = 0.5; // how far onto a scren next section must come before count increments to next
	let bottom = 0.9; // how far from bottom of screen fixed area ends


	let menu = 1;

	const setMenu = (val) => {
		menu = val;
	};
</script>

<NavBar {setMenu} />
{#if menu === 1}
	<Chapter1 />
{:else if menu === 2}
	<Chapter2 />
{:else}
	<h1>Page Not Found</h1>
{/if}


<main>
  

	
<style>
	h2 {
		margin: 0.5rem 0;	
	}
	
	[slot="background"] {
		background-color: rgb(255,209,223);
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
		background-color: rgb(225, 209, 223);
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
