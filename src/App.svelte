<script>
  import Chapter1 from './lib/Chapter1.svelte';
  import Chapter2 from './lib/Chapter2.svelte';
  import Footer from './lib/Footer.svelte';
  import NavBar from './lib/NavBar.svelte';


  const pages = [
		Chapter1,
		Chapter2,
	];
	
	let menu = 1;

	const setMenu = (val) => {
		menu = val;
	};
</script>


<NavBar {setMenu} />

<div id="app"> 	

	{#if menu === 1}
		<Chapter1 />

	{:else if menu === 2}
		<Chapter2 />

	{:else}
		<h1>Page Not Found</h1>
	{/if}

	<Footer/>
</div>



<main>	
	
	<style>
		h2 {
			margin: 0.5rem 0; 
		}
		
		[slot="background"] { /*right side*/
			background-color: #030000;/*unclear where this goes. likely overruled across the board lol*/
			border-top: 2px solid #ff3e00;
			border-bottom: 2px solid #ff3e00;
			overflow: hidden;
			/*padding: 1em;*/
			p {
				margin: 0;
				font-size: 1.1rem;
			}
		}

		/* allow ONLY the <section> tags to receive clicks, hovers, and other points events */
		[slot="foreground"] {
			pointer-events: none;
			section {
				pointer-events: all;
			}
		}
		
		.app {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100vh;
			width: 100%;
		}
		
	</style>

</main>
