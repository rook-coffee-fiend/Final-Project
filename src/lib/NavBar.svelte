<!--This is not just the NavBar but also the header; I just don't want to deal with changing the name of the file-->
<script>
	import HomeTitle from './HomeTitle.svelte';
	export let setMenu;
</script>

<!--<image href= "/assets/JP.png" alt="Jamaica Plain" width="100%" height="auto" />-->

<HomeTitle/>


<ul id="menu">
	<li><a href=" " on:click|preventDefault={() => setMenu(1)}>Home Page</a></li> |
	<li><a href=" " on:click|preventDefault={() => setMenu(2)}>Reviews of Bethany's services</a></li>
</ul>

<style>
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