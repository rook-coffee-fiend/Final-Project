<script>
	export let setMenu;
</script>

<ul id="menu">
	<li><a href="/" on:click|preventDefault={() => setMenu(1)}>Home Page</a></li> |
	<li><a href="/" on:click|preventDefault={() => setMenu(2)}>Reviews of Bethany's services</a></li>
</ul>
