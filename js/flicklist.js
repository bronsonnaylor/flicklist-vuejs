

var api = {
	root: "https://api.themoviedb.org/3",
	token: "626aaeb749bede2aeb605c55c9025e93" // TODO put your api key here
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
    fetch(`${api.root}/configuration?api_key=${api.token}`)
        .then(resp => resp.ok ? resp : Promise.reject(resp))
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}


console.log("The script loaded!");
testTheAPI();
