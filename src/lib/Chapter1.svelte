<script>
    import MapInfo from './MapInfo.svelte';
    import CalculatorFunction from './CalculatorFunction.svelte';
    import NavBar from './NavBar.svelte';
	

</script>

<h1>Cats and Community in Jamaica Plain</h1>
<p>
	I first moved to Boston in fall of 2022- it was my first time living on my own post-graduation, and it took some getting used to. 
	Gone were the days of dorm living, where everyone I knew was just a ten minute walk across campus away. Instead, my friends were 
	scattered across the city: Allston, Cambridge, Fenway, and even as far south as Quincy. Relying on public transit meant it could 
	take as much as an hour in transit one way- socializing had to be planned out well in advance if I wanted to make it happen. 
</p>

<p>
	It was isolating living in Jamaica Plain- I didn’t know anyone in my neighborhood! Even my new coworkers, who would eventually 
	become close friends, lived out of practical reach. What was a girl to do?
</p>

<article class="scrollytelling-container">

	<div class="text-panel">
	<div data-step="1">
		<p>
			Enter Cats of Jamaica Plain, a Facebook group with over three thousand members that’s served as a hub for cat-food swaps, behavioral 
			advice, and tracking/trapping assistance since 2018. I missed my parents’ cats desperately, so when I stumbled on the group in my 
			“suggested” feed, I was thrilled. 
		</p>
		<p>
			At first I just sat back and enjoyed the steady feed of cat pictures, but soon it became apparent that this group was much, much 
			more than that: it was a community center. Cats of Jamaica Plain brings people together like the internet used to do, in its 
			late-aughts/early teens heyday. 
		</p>
	</div>
	<div data-step="2">
		<p>
			Cat owners in need of medications, food, advice, and vet recommendations have their needs met swiftly by their highly-engaged neighbors.
		</p>
		<p>
			The group regularly receives pleas for help in locating escaped kitties, and reports of stray, lost, and feral cats come in nearly 
			every week. The hivemind can typically quickly identify whether any given cat is an indoor/outdoor friend who’s enjoying a stroll, 
			versus a frightened domestic, versus an unfriendly feral.
		</p>
		<p>
			Folks commemorate their departed friends with memorial posts and are met with comfort and companionship, as others come to remember their 
			own furry friends. 
		</p>
	</div>
	<div data-step="3">
		<p>
			It was delightful to witness the community that’d been built around thousands of strangers’ and neighbors’ love of cats. But I really 
			started to feel connected to my new hometown once I began answering cat-sitting requests. What began as a one-off gig in July of 2023 
			grew and transformed into a robust small business. Providing pet care has helped me explore the neighborhood, connected me with new 
			friends and mentors, and allowed me to support myself through grad school. And best of all: it’s given me lots of encounters with our 
			wonderful community cats.
		</p>
	</div>
	<div data-step="4">
		<p>
			Take Giddy, for example: a friendly, chunky, all-black cat sporting a dashing airtag on his collar, Giddy is a pillar of the JP kitty 
			community. Neighbors Emily and Julian dote on him, regularly making detours to visit the cul-de-sac he frequents. They were eager to 
			regale me with tales of his exploits: 
				<br/>“One time he got a ride in the mail truck because the mailman knows him.”
				<br/>“I put him in the special thanks notes of an album I worked on.” 
				<br/>“I’ve met so many neighbors thru Gid!”
		</p>
		<p>
				Despite the perennial debate over the ethics of allowing cats to live outdoors, Giddy is as harmless as they come. Toothless and 
				friendly, he’ll stand up for himself against dogs but is otherwise a snuggly sweetheart. [IMAGE] 
		</p>
	</div>

	
	<div class="image-panel">
  		<img src="Domino.jpg" alt="A girl smiles while she snuggles with a black cat" class="step-image"/>
			<!--FIRST PICTURE HERE: GIDDY WITH BUNNY-->
    </div>	

</article>

	<section class="map-section" id="map">
		<p>EXIT SCROLLY: MAP</p>
			<!--THIS IS WHERE THE MAP GOES-->
		<MapInfo/>
	</section>

	<section class="post-scrolly">
		<p> 
			 INTRODUCE MYSELF
			<!--INTRODUCE MYSELF//AUTHOR & COMMUNITY STATEMENT-->
		</p>
		<p> 			
			Want to work with Bethany? Details about sitting/rates/etc 
			<br/>In bullet points below
			<br/>And so on and so forth
		</p>
		<CalculatorFunction/>
	</section>
	

<style>
	.scrollytelling-container {
	  display: flex;
	  position: relative;
	  width: 100%;
	  height: 100vh;
	  overflow: hidden;
	}
  
	.text-panel {
	  width: 50%;
	  padding: 2rem;
	  overflow-y: scroll;
	  height: 100vh;
	  scroll-snap-type: y mandatory;
	}
  
	.image-panel {
	  width: 50%;
	  position: sticky;
	  top: 0;
	  height: 100vh;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background: #f5f5f5;
	}
  
	.image-panel img {
	  max-width: 90%;
	  max-height: 90%;
	  object-fit: contain;
	}
  
	.map-section,
	.post-scrolly {
	  padding: 4rem 2rem;
	  max-width: 800px;
	  margin: 0 auto;
	}
  </style>
