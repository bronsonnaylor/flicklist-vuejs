
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
			browseItems: []
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
						// console.log("We got a response from The Movie DB!");
						// console.log(response.results);
						this.browseItems = response.results;

					});
		},
		addToWatchlist: function (movie) {
			this.watchlistItems.push(movie);
			console.log(movie)
			console.log(this.watchlistItems)
		}
		// TODO 5
		// make a method to use when a "Add to Watchlist" button is clicked
		// It should accept a movie as a parameter, and add that item to
		// the watchlistItems list,
	},
	mounted: function() {
		// call discoverMovies when things start up
		this.discoverMovies();
	},
});
