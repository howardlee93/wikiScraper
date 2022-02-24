<script>
	let searchTerm = '';
	let imageSrc = '//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/260px-Cat_poster_1.jpg';
	let pdfSrc = '';
	let baseURL = 'http://localhost:5000/api/';

	async function handleSubmit(){
		console.log(`api/${searchTerm}`);

		const res = await fetch(`${baseURL}${searchTerm}`,{
			method: 'POST'
		})
		const resText = await res.json();
		console.log(resText);
		imageSrc = resText;
	}


</script>

<main>
	<h1>Wikipedia search wrapper</h1>
	<input bind:value={searchTerm}  on:change={handleSubmit}
	/>
	<p></p>
	<img src={imageSrc} alt="wiki-image"/>
	<p></p>
	<!-- <iframe src={pdfSrc}/> -->

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