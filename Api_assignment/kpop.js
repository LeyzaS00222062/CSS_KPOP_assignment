const settings = {
	async: true,
	crossDomain: true,
	url: 'https://k-pop.p.rapidapi.com/girl-groups?q=Twice&by=Group%20Name',
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9df40bec4bmsh3fb79e4afc610ecp166a0fjsnef56e472e416',
		'x-rapidapi-host': 'k-pop.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});


// API URL

//const api_1 = ;
