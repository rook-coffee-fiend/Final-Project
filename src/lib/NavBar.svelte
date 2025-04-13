<!--This is not just the NavBar but also the header; I just don't want to deal with changing the name of the file-->
<script>
	export let setMenu;
</script>



<div class="header-wrapper">

	<h1>Cats and Community in Jamaica Plain</h1>
	

</div>


<ul id="menu">
	<li><a href=" " on:click|preventDefault={() => setMenu(1)}>Home Page</a></li> |
	<li><a href=" " on:click|preventDefault={() => setMenu(2)}>Reviews of Bethany's services</a></li>
</ul>


<style>
	.header-wrapper {
		background-image: url('/GiddyBunny.jpg'); 
		background-size: cover; /* cover makes the image fill the entire div */
		background-position: center; /* center the image in the div */
		background-repeat: no-repeat;
		min-height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		
		padding: 1rem;
		text-align: center;
		border-radius: 8px;
		border: 1px solid #ffffff;
		color: white;
		text-shadow: 0 0 4px rgba(0, 0, 0, 1);
	}

	ul#menu {
		font-size: 18px;
		background-color: rgb(223, 250, 255); /* light blue*/
		list-style: none;
		margin: auto;
		padding-top: 0.5rem;
		padding-left: 2rem;
		padding-bottom: 0.5rem;
		border-radius: 8px;
		border: 1px solid #ffffff;
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

</style>