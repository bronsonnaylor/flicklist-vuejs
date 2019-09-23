
var api = {
  root: "https://api.themoviedb.org/3",
  token: "626aaeb749bede2aeb605c55c9025e93"
}

var flicklistView = new Vue({
	el: '#mount-target',
	data: function() {
		return {
			// This is the data model.
			// Whenever it changes, Vue will automatically re-render
			// the html for us.
			watchlistItems: [],
      browseItems: [],
      searchTerm: null,
		};
	},
	methods: {
		discoverMovies: function () {
			/**
			 * Makes an AJAX request to themoviedb.org, asking for some movies
			 * if successful, updates the data.browseItems appropriately
			 */
			fetch(`${api.root}/discover/movie?api_key=${api.token}`)
			.then(resp => resp.ok ? resp.json() : Promise.reject(resp))
			.then((response) => {
				console.log("We got a response from The Movie DB!");
				console.log(response);
				this.browseItems = response.results;
			});
		},
		searchMovies: function(searchTerm) {
			// Make an AJAX request to the /search/movie endpoint
			// of the API, using the query string that was passed in.
			//
			// if successful, update this.browseItems appropriately.
			// This update will automatically trigger a re-render.
			console.log(`searching for movies with "${searchTerm}" in their title...`);

			fetch(`${api.root}/search/movie?api_key=${api.token}&query=${searchTerm}`)
			.then(resp => resp.ok ? resp.json() : Promise.reject(resp))
			.then((response) => {
				console.log("We got a response from The Movie DB!");
				console.log(response);

				this.browseItems = response.results;

			});
		},

		posterUrl: function(movie) {
			return "http://image.tmdb.org/t/p/w300//" + movie.poster_path;
		},

		addToWatchlist: function(movie) {
			this.watchlistItems.push(movie);
			console.log(this.watchlistItems)
		},

		removeFromWatchlist: function(movie) {
			this.watchlistItems = this.watchlistItems.filter(newList => newList !== movie);
		}
	},

	mounted: function () {
		this.discoverMovies();
	},
});
