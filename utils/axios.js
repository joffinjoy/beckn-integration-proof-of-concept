const axios = require('axios').default;

exports.sendRequest = (body, url) => {
	axios
		.post(url, body)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
};
