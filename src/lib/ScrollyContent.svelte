<script>
	import Scroller from './Scroller.svelte'; //
	
	let count;  // total sections in scroller
	let index;  // which section number is currently active (starts at 1)
	let offset;  // how far through the current section you have scrolled (0 to 1)
	let progress; // how far through the whole scroller you have gone (0 to 1) 
	let top = 0; // how far from top of screen is fixed background
	let threshold = 0.5; // how far onto a scren next section must come before count increments to next
	let bottom = 0.5; // how far from bottom of screen fixed area ends
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
	<div slot="background" style="margin: 0 0 0 50%;"> <!--static image frame for cat; set to righthand side of screen -->
		<h2>Cat Image {index}</h2>
			</div>

	<!-- the SCROLLING layer of the scroller -->
	<!-- the padding here is a key way to determine overlay vs. side-by-side -->
	<div slot="foreground" style="padding: 0 50% 0 0;"> <!--scrolling article text; set to lefthand side of screen -->
		<section>
			<p>
				Enter Cats of Jamaica Plain, a Facebook group with over three thousand members that’s served as a hub for 
				cat-food swaps, behavioral advice, and tracking/trapping assistance since 2018. I missed my parents’ cats 
				desperately, so when I stumbled on the group in my “suggested” feed, I was thrilled. 
			<br/>
			<br/>
				At first I just sat back and enjoyed the steady feed of cat pictures, but soon it became apparent that this 
				group was much, much more than that: it was a community center. Cats of Jamaica Plain brings people together 
				like the internet used to do, in its late-aughts/early teens heyday. 
			</p>
		</section> 

		<section>
			<p>
				Cat owners in need of medications, food, advice, and vet recommendations have their needs met swiftly by their 
				highly-engaged neighbors.
			<br/>
			<br/>
				The group regularly receives pleas for help in locating escaped kitties, and reports of stray, lost, and feral 
				cats come in nearly every week. The hivemind can typically quickly identify whether any given cat is an indoor/
				outdoor friend who’s enjoying a stroll, versus a frightened domestic, versus an unfriendly feral.
			<br/>
			<br/>
				Folks commemorate their departed friends with memorial posts and are met with comfort and companionship, as others 
				come to remember their own furry friends. 
			</p>
		</section>

		<section>
			<p>
				It was delightful to witness the community that’d been built around thousands of strangers’ and neighbors’ love of 
				cats. But I really started to feel connected to my new hometown once I began answering cat-sitting requests. What 
				began as a one-off gig in July of 2023 grew and transformed into a robust small business. Providing pet care has 
				helped me explore the neighborhood, connected me with new friends and mentors, and allowed me to support myself 
				through grad school. And best of all: it’s given me lots of encounters with our wonderful community cats.
			</p>
		</section>

		<section>
			<p>
				Take Giddy, for example: a friendly, chunky, all-black cat sporting a dashing airtag on his collar, Giddy is a 
				pillar of the JP kitty community. Neighbors Emily and Julian dote on him, regularly making detours to visit the 
				cul-de-sac he frequents. They were eager to regale me with tales of his exploits: 
					<br/>“One time he got a ride in the mail truck because the mailman knows him.”
					<br/>“I put him in the special thanks notes of an album I worked on.” 
					<br/>“I’ve met so many neighbors thru Gid!”
			<br/>
			<br/>
				Despite the perennial debate over the ethics of allowing cats to live outdoors, Giddy is as harmless as they come. 
				Toothless and friendly, he’ll stand up for himself against dogs but is otherwise a snuggly sweetheart. 
			</p>
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
		background-color: rgb(115, 149, 207); /*cat image background color*/
		border: 2px solid #ffffff; /*cat image border color*/
		overflow: hidden; 
		padding: 1em; 
		position: fixed; /*fixes the background image in place*/
	}

	/* allow ONLY the <section> tags to receive clicks, hovers, and other points events */
	[slot="foreground"] {
		pointer-events: none;
		section {
			pointer-events: all;
		}
	}
	

		
	section {
		background-color: rgb(195,229,220); /* light green*/
		height: 75vh; /* make each scrolling "slide" 80% of the vertical screen height */
		width: 80%;
		color: rgb(0, 0, 0); /*text color*/
		padding: 1rem;
		/*margin: top right bottom left;*/
		margin: 0 0 1rem 5rem; /* margin at the top, right, bottom, left; adds split between sections*/

		p {
			font-size: 18px; /*font size*/
			max-width: 90%; 
			/*background-color: rgba(14, 90, 255, 0.15); background to paragraph color*/
			padding: 1rem;
			margin-top: 1rem; /*it's 5% below the top of the section*/
			margin-left: 1rem; /* center it horizontally */
			margin-bottom: 1rem; /* margin at the bottom*/
			margin-right: 1rem;
		}
	}
</style>