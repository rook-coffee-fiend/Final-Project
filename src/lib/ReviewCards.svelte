<script>
	import { reviews } from './reviews.js';
	
	let flippedCards = new Set();
	let cardHeights = {};

	//const reviews = Array.from({ length: 12 }, (_, i) => ({
		//id: i,
		//name: Reviewer ${i + 1},
		//descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
		//img: "https://via.placeholder.com/200x300"
	//}));

	function toggleCard(id) {
	const isFlipping = !flippedCards.has(id);

	if (isFlipping) {
		// Wait for DOM update, then measure back content
		requestAnimationFrame(() => {
			const back = document.querySelector(`#card-back-${id}`);
			if (back) {
				cardHeights[id] = back.scrollHeight;
			}
		});
	}
	if (flippedCards.has(id)) {
		flippedCards.delete(id);
	} else {
		flippedCards.add(id);
	}
	flippedCards = new Set(flippedCards);
}
</script>

<div class="grid">
	{#each reviews as { id, name, descr, img, review }}
	<button
		class="flip-box"
		style="height: {flippedCards.has(id) ? `${cardHeights[id] || 295}px` : '295px'}"
		on:click={() => toggleCard(id)}
		on:keydown={(e) => e.key === 'Enter' && toggleCard(id)}
		aria-label="Toggle review card"
	>
			<div class="flip-box-inner {flippedCards.has(id) ? 'show-back' : ''}">
				<div class="flip-box-front">
					<img src={img} alt="Review by {name}" />
				</div>

				<div class="flip-box-back" id={"card-back-" + id}>
					<h2>{name}!</h2>
					<p class="descr">{descr}</p>
					<p>{review}</p>
				</div>

			</div>
		</button>
	{/each}
</div>

<style>
	h2 {
		text-align: center;
		margin-bottom: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr); /* max 4 cards per row */
		grid-auto-rows: minmax(300px, auto); /* min height of 300px, auto height for larger content */
		gap: 24px; /* consistent padding between cards */
		justify-items: center;
		padding: 0 1rem; 
		align-items: start;
	}

	.flip-box {
		width: 275px; /*width of backing button*/
		min-height: 330px; /* Ensure button is at least as tall as front */
		perspective: 1000px; /* Perspective for 3D effect */
		padding-top: 5%;
		align-items: start; 
		cursor: pointer; 
		background-color: rgba(24, 45, 21, 0.5);
		border-color: rgba(255, 255, 255, 0.5);
		transition: all 0.4s ease; 
	}

	.flip-box-inner {
		position: relative; 
		width: 100%;
		transform-style: preserve-3d;
		transition: transform 0.8s ease;
	}

	/* Flipped: allow height to auto-expand */
	.flip-box-inner.show-back {
		transform: rotateY(180deg);
	}

	.flip-box-front,
	.flip-box-back {
		position: absolute;
		width: 100%;
		backface-visibility: hidden;
		border-radius: 8px;
		box-shadow: 0px 0px 2rem rgba(221, 159, 177, 0.8); 
		overflow: hidden; 
	}

	.flip-box-front { /* Frame for picture of cat! */
		height: 295px;
		width: 100%;
		background: rgb(255, 255, 255);
	}

	.flip-box-front img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.flip-box-back {
		background-color: #cbf9c3;
		color: black;
		transform: rotateY(180deg);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		text-align: center;
		position: relative;
		z-index: 2;
		min-height: 295px; /* Ensure back is at least as tall as front */
	}

	.flip-box-back h2 {
		margin: 0;
	}

	.flip-box-back p {
		margin: 0.5rem 0.5rem; 
		text-align: left;
	}

	.flip-box-back .descr{
		font-size: 0.9rem;
		color: #000000;
		font-style: italic;
		text-align: center;
	}

	/* Responsiveness - max 4 down to 1 */
	@media (max-width: 1100px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (max-width: 800px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 500px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
