<script>
	import Scroller from './Scroller.svelte'; //
	
	let count;  // total sections in scroller
	let index;  // which section number is currently active (starts at 1)
	let offset;  // how far through the current section you have scrolled (0 to 1)
	let progress; // how far through the whole scroller you have gone (0 to 1) 
	let top = 0; // how far from top of screen is fixed background
	let threshold = 0.5; // how far onto a scren next section must come before count increments to next
	let bottom = 0.9; // how far from bottom of screen fixed area ends
</script>



<!-- the Scrolling component from the Svelte team -->
<Scroller
	{top}
	{threshold}
	{bottom}
	bind:count
	bind:index
	bind:offset
	bind:progress
>

	<!-- the FIXED layer of the scroller -->
	<!-- the margin here is a key way to determine overlay vs. side-by-side -->
	<div slot="background" style="margin: 0 0 0 50%;">
		<h2>Cat Image {index}</h2>
			</div>

	<!-- the SCROLLING layer of the scroller -->
	<!-- the padding here is a key way to determine overlay vs. side-by-side -->
	<div slot="foreground" style="padding: 0 50% 0 0;">
		<section>
			<p>section 1</p>
		</section>
		<section>
			<p>section 2</p>
		</section>
		<section>
			<p>section 3</p>
		</section>
		<section>
			<p>section 4</p>
		</section>
		<section>
			<p>section 5</p>
		</section>
	</div>

</Scroller>



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
		color: white;
		padding: 1em;
		margin: 0 0 1em 0;
		p {
			max-width: 200px;
			background-color: rgba(0,0,0,0.8);
			padding: 1rem;
			margin-top: 100%; /* center it vertically */
			margin-left: auto; /* center it horizontally */
			margin-right: auto;
		}
	}
</style>