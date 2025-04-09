<script>
    import Scroller from './scrolly.svelte';
    import MapInfo from './MapInfo.svelte';
    import CalculatorFunction from './CalculatorFunction.svelte';

</script>

<article>

	<h1>Cats and Community in Jamaica Plain</h1>

	<p>
		Lorem ipsum dolor sit amet. Et cumque molestias qui amet alias ex porro minima qui delectus dolores in repudiandae tempora quo corporis 
		esse ut natus praesentium! Id cupiditate rerum aut corporis aperiam ut excepturi amet?
		Nam corporis minus et exercitationem repellendus non placeat ullam. Et suscipit itaque qui aliquid unde eum perferendis officiis 
		sed provident dicta eos necessitatibus saepe est quia dolor et architecto cupiditate.
		Qui voluptatum totam non corrupti facere est ipsum excepturi et voluptatum voluptatem et nihil natus eos placeat tenetur 33 
		recusandae reiciendis? Ea voluptates ducimus eum repellat officiis id placeat eligendi.
	</p>

	<Scroller/>
	<section id="scrolly">
		<div class="step-image" data-step="1">
      		<img src="Domino.jpg" alt="A girl smiles while she snuggles with a black cat" class="step-image"/>
			<!--FIRST PICTURE HERE: GIDDY WITH BUNNY-->
    	</div>	
		
		<div class="step" data-step="2">
			<p> 
				Lorem ipsum dolor sit amet. Et cumque molestias qui amet alias ex porro minima qui delectus dolores in repudiandae tempora quo
				corporis esse ut natus praesentium! Id cupiditate rerum aut corporis aperiam ut excepturi amet?
				Nam corporis minus et exercitationem repellendus non placeat ullam. Et suscipit itaque qui aliquid unde eum perferendis 
				officiis sed provident dicta eos necessitatibus saepe est quia dolor et architecto cupiditate.
				
			</p>
		</div>

		<div class="step-image" data-step="3">
			<img src="PetaCat.jpg" alt="A tabby cat gets pets from someone off screen" class="step-image"/>
			<!--NEXT PICTURES HERE: GIDDY-->
		</div>

		<div class="step" data-step="4">
			<p>STEP THREE- IMAGE</p>
			<!--NEXT PICTURES HERE: THEN NIA-->
		</div>

		<div class="step" data-step="5">
			<p>STEP FOUR- IMAGE</p>
			<!--NEXT PICTURES HERE: THEN POUNCE. Include Mystery Orange Tom?-->
		</div>

		<div class="step" data-step="6">
			<p> 
				Lorem ipsum dolor sit amet. Et cumque molestias qui amet alias ex porro minima qui delectus dolores in repudiandae tempora quo
				corporis esse ut natus praesentium! Id cupiditate rerum aut corporis aperiam ut excepturi amet?

				Nam corporis minus et exercitationem repellendus non placeat ullam. Et suscipit itaque qui aliquid unde eum perferendis 
				officiis sed provident dicta eos necessitatibus saepe est quia dolor et architecto cupiditate.

				Qui voluptatum totam non corrupti facere est ipsum excepturi et voluptatum voluptatem et nihil natus eos placeat tenetur 33 
				recusandae reiciendis? Ea voluptates ducimus eum repellat officiis id placeat eligendi.
			</p>
		</div>

		<div class="step" data-step="7">
			<p>STEP SEVEN- IMAGE</p>
			<!--Picture of Mystery Orange Tom?-->
		</div>

		<div class="step" data-step="8" id="map">
			<p>STEP EIGHT- MAP</p>
			<!--THIS IS THE MAP STEP-->
			<MapInfo/>
		</div>
	</section>

	<div>
		<p> 
			EXIT SCROLLY AND INTRODUCE MYSELF
			<!--INTRODUCE MYSELF//AUTHOR & COMMUNITY STATEMENT-->
			Lorem ipsum dolor sit amet. Et cumque molestias qui amet alias ex porro minima qui delectus dolores in repudiandae tempora quo
			corporis esse ut natus praesentium! Id cupiditate rerum aut corporis aperiam ut excepturi amet?

			Nam corporis minus et exercitationem repellendus non placeat ullam. Et suscipit itaque qui aliquid unde eum perferendis 
			officiis sed provident dicta eos necessitatibus saepe est quia dolor et architecto cupiditate.

			Qui voluptatum totam non corrupti facere est ipsum excepturi et voluptatum voluptatem et nihil natus eos placeat tenetur 33 
			recusandae reiciendis? Ea voluptates ducimus eum repellat officiis id placeat eligendi.
		</p>
	</div>
	<div>
		<p> 			
			Want to work with Bethany? Details about sitting/rates/etc 
			<br/>In bullet points below
			<br/>And so on and so forth
		</p>
		<CalculatorFunction/>
		</div>
	
</article>