<script>
	export let searchTerm;
	let baseURL = 'http://localhost:5000/api/';
	
	fetch(url,{
		method:'POST'
	});


</script>

<main>
	<h1>Wikipedia search wrapper</h1>
	<input bind:value={$searchTerm} />
	<p></p>
	<img src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/260px-Cat_poster_1.jpg" alt="wiki-image"/>
	<iframe src="../../res/cat.pdf"></iframe>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>