const { sendRequest } = require('../utils/axios');
const responses = require('../response.json');

const searchProcessor = (searchTerm) => {};

exports.selectAPI = async (req, res) => {
	console.log(req.query.choice);
	switch (req.query.choice) {
		case '1':
			await sendRequest(
				{
					context: {
						domain: process.env.DOMAIN,
						country: process.env.COUNTRY,
						city: process.env.CITY,
						action: 'search',
					},
					message: {
						intent: {
							descriptor: {
								name: req.query.keyword,
							},
						},
					},
				},
				process.env.BECKN_BG_URI + '/search'
			);
			break;
		default:
			return res.send('Invalid Choice');
	}
	res.send(responses.success_ack);
};
