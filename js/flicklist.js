
var api = {
  root: "https://api.themoviedb.org/3",
  token: "626aaeb749bede2aeb605c55c9025e93"
}

var flicklistView = new Vue({
	el: '#mount-target',
	data: function() {
		return {
			watchlistItems: [],
			browseItems: [],
			searchTerm: []
      // TODO 8B
		};
	},

	methods: {
		discoverMovies: function () {
			fetch(`${api.root}/discover/movie?api_key=${api.token}`)
			.then(resp => resp.ok ? resp.json() : Promise.reject(resp))
			.then((response) => {
				console.log("We got a response from The Movie DB!");
				console.log(response);

				this.browseItems = response.results;

			});
		},
		searchMovies: function(searchTerm) {
		console.log(`searching for movies with "${searchTerm}" in their title...`);
		fetch(`${api.root}/search/movie?api_key=${api.token}&query=${this.searchTerm}`)
		.then(resp => resp.ok ? resp.json() : Promise.reject(resp))
		.then((response) => {
			this.browseItems = response.results;
		})
		},

		addToWatchlist: function(movie) {
			this.watchlistItems.push(movie);
		},
	},

	mounted: function () {
		this.discoverMovies();
	}
});
