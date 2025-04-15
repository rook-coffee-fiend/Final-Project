<script>
    //import MapInfo from './MapInfo.svelte';
    import CalculatorFunction from './CalculatorFunction.svelte';
    import ScrollyContent from './ScrollyContent.svelte';
	
	export let setMenu;

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
		I hope you enjoyed this little tour of our corner of the Jamaica Plain community! Thank you to everyone who shared their 
		stories, provided quotes, and sent photos my way for the creation of this piece. 
		<br/>
		<br/>
		JP's cat lovers have not only helped me feel at home in Boston, but through supporting my pet care business, they've 
		allowed me to support myself through grad school.
		This article (and this website!) was one of the last hurdles to clear before I graduate in May- I created it for my 
		final project in <a href="https://camd.northeastern.edu/people/rahul-bhargava/">Professor Rahul Bhargava</a>'s 
		<i>Coding for Digital Storytelling</i> course. 
		<br/>
		<br/>
		Though I'm about to graduate and am looking for a full-time job, I haven't yet recieved any offers. If there's a job 
		opening at your company and you think I'd be a good fit, let me know and I'll apply! Though for any current clients 
		reading this, fret not- once I do secure full-time employment, I have no intention of leaving cat-sitting behind. 
		<br/>
		<br/>
		If you'd like to learn more about my pet care services, please <a href=" " on:click|preventDefault={() => setMenu(2)}>check out some reviews </a>, 
		interact with the rate calculator below, or contact me directly <a href="mailto:bethanyward221@gmail.com"> via email</a>.
	</p>
	
</article>

<article class="calculator-section">
	<p> 			
		Want to work with Bethany? See the <b>interactive calculator feature</b> below to get an estimate for pet care, or go to the bottom of the page for her contact information. 
	</p>
	<CalculatorFunction/>
</article>


<style>
	article {
		margin-top: 2rem;
		margin-left: 10em;
		margin-right: 10em;
		margin-bottom: 3.5rem;
	}
	
 	p{
		color: rgb(0, 0, 0);
		font-size: 1.1rem;
		padding: 0, 0, 0, 0;
	}

	.calculator-section {
		background-color: rgba(113, 1, 1, 0.4);
		border-radius: 16px;

		font-weight: 500;

		padding: 2rem;
		padding-left: 2rem;
		padding-right: 2rem;
		margin-left: 4rem;
		margin-right: 4rem;
	}


/*RE-INTEGRATE MAP SECTION IF I HAVE TIME.*/

/*Narrator: She did not, in fact, have time.*/

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
