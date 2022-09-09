'use strict';
require('dotenv').config();
const express = require('express');
const bap = require('./controllers/bap');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('API List');
console.log('1. Search\n2. Init\n3. Confirm\n4. Cancel\n5. Update\n6. Rating\n7. Support');

app.get('/select-api', bap.selectAPI);

app.post('/on_search', (req, res) => {
	console.debug(JSON.stringify(req.body, null, '\t'));
	res.send(responses.success_ack);
});

app.post('/on_init', (req, res) => {
	res.send(responses.success_ack);
});

app.post('/on_confirm', (req, res) => {
	res.send(responses.success_ack);
});

app.post('/on_cancel', (req, res) => {
	res.send(responses.success_ack);
});

app.post('/on_update', (req, res) => {
	res.send(responses.success_ack);
});

app.post('/on_rating', (req, res) => {
	res.send(responses.success_ack);
});

app.post('/on_support', (req, res) => {
	res.send(responses.success_ack);
});

app.listen(process.env.BAP_PORT, () => {
	console.log('__________________________');
	console.log(`BAP listening on port ${process.env.BAP_PORT}`);
	console.log('Use /select-api API to simulate Beckn APIs list above.');
});
