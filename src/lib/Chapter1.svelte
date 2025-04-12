<script>
    //import MapInfo from './MapInfo.svelte';
    import CalculatorFunction from './CalculatorFunction.svelte';
    import ScrollyContent from './ScrollyContent.svelte';
	

</script>

<article>
	<p>
		I first moved to Boston in fall of 2022- it was my first time living on my own post-graduation, and it took some getting used to. 
		Gone were the days of dorm living, where everyone I knew was just a ten minute walk across campus away. Instead, my friends were 
		scattered across the city: Allston, Cambridge, Fenway, and even as far south as Quincy. Relying on public transit meant it could 
		take as much as an hour in transit one way- socializing had to be planned out well in advance if I wanted to make it happen. 
	</p>

	<p>
		It was isolating living in Jamaica Plain- I didn’t know anyone in my neighborhood! Even my new coworkers, who would eventually 
		become close friends, lived out of practical reach for the day-to-day. What was a girl to do?
	</p>
</article>


<ScrollyContent/>


<!--<section class="map-section" id="map">
	<MapInfo/>
</section>-->

<article>
	<p> 
		INTRODUCE MYSELF
		<br/>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
		aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	
</article>

<article>
	<p> 			
		Want to work with Bethany? See the interactive estimation feature below, or go to the bottom of the page for contact information. 
	</p>
	<CalculatorFunction/>
</article>

<style>
	article {
		margin-left: 8rem;
		margin-right: 8rem;
	}
	
 	p{
		font-size: 1.1rem;
		padding: 0, 0, 0, 0;
	}

/*RE-INTEGRATE MAP SECTION?*/

/*	.map-section {
	  padding: 4rem 2rem;
	  max-width: 400px;
	  margin: 0 auto;
	}*/
	
	/*.scrollytelling-container {
	  display: flex;
	  position: relative;
	  width: 100%;
	  height: 100vh;
	  overflow: hidden;
	}*/
  
	/*.map-section,
	.post-scrolly {
	  padding: 4rem 2rem;
	  max-width: 800px;
	  margin: 0 auto;
	}*/
  </style>
