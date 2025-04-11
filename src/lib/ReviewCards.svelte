<script>
	import { reviews } from './reviews.js';
	
	let flippedCards = new Set();

	//const reviews = Array.from({ length: 12 }, (_, i) => ({
		//id: i,
		//name: `Reviewer ${i + 1}`,
		//descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
		//img: "https://via.placeholder.com/200x300"
	//}));

	function toggleCard(id) {
		if (flippedCards.has(id)) {
			flippedCards.delete(id);
		} else {
			flippedCards.add(id);
		}
		flippedCards = new Set(flippedCards);
	}
</script>

<h1>Read Some Reviews!</h1>

<div class="grid">
	{#each reviews as { id, name, descr, img, review }}
		<button class="flip-box" on:click={() => toggleCard(id)} on:keydown={(e) => e.key === 'Enter' && toggleCard(id)} aria-label="Toggle review card">
			<div class="flip-box-inner {flippedCards.has(id) ? 'show-back' : ''}">
				<div class="flip-box-front">
					<img src={img} alt="Review by {name}" />
				</div>

				<div class="flip-box-back">
					<h2>{name}:</h2>
					<p>{descr}</p>
					<p>{review}</p>
				</div>

			</div>
		</button>
	{/each}
</div>

<style>
	h1 {
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
	}

	.flip-box {
		width: 265px;
		min-height: 300px;
		perspective: 1000px;
		cursor: pointer;
		transition: height 0.4s ease;
	}

	/*.flip-box.expanded {
		height: auto;
	}*/

	.flip-box-inner {
		position: relative;
		width: 100%;
		min-height: 300px;
		transition: transform 0.8s ease, height 0.4s ease;
		transform-style: preserve-3d;
	}

	.flip-box-inner.show-back {
		transform: rotateY(180deg);
		height: auto;
	}

	.flip-box-front,
	.flip-box-back {
		position: absolute;
		width: 100%;
		min-height: 300px;
		backface-visibility: hidden;
		border-radius: 8px;
		box-shadow: 4px 8px 16px rgb(221, 159, 177);
		overflow: hidden;
	}

	.flip-box-front {
		background: rgb(185, 215, 223);
	}

	.flip-box-front img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.flip-box-back {
		background-color: #75ba8c;
		color: black;
		transform: rotateY(180deg);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		text-align: center;
	}

	.flip-box-back h2 {
		margin: 0;
	}

	.flip-box-back p {
		margin: 0.5rem 0 0;
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
