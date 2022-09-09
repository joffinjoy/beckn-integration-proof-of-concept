const { sendRequest } = require('../utils/axios');
const responses = require('../response.json');
const { requestBodyGenerator } = require('../helpers/requestBodyGenerator');

exports.selectAPI = async (req, res) => {
	let requestSent = false;
	switch (req.query.choice) {
		case '1':
			requestSent = await sendRequest(
				requestBodyGenerator('bg_search', { keyword: req.query.keyword }),
				process.env.BECKN_BG_URI + '/search'
			);
			break;
		case '2':
			break;
		default:
			return res.send('Invalid Choice');
	}
	if (requestSent) res.send(responses.success_ack);
	else res.send(responses.error);
};
