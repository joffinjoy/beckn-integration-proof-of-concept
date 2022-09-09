const axios = require('axios').default;

exports.sendRequest = (body, url) => {
	return new Promise((resolve, reject) => {
		axios
			.post(url, body)
			.then((response) => {
				resolve(true);
			})
			.catch((error) => {
				console.log(error);
				reject(false);
			});
	});
};
