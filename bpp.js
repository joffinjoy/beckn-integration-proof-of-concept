'use strict';
require('dotenv').config();
const responses = require('./response.json');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/search', (req, res) => {
	console.debug(JSON.stringify(req.body, null, '\t'));
	res.send(responses.success_ack);
});

app.post('/init', (req, res) => {
	res.send(responses.success_ack);
});

app.post('/confirm', (req, res) => {
	res.send(responses.success_ack);
});

app.post('/cancel', (req, res) => {
	res.send(responses.success_ack);
});

app.post('/update', (req, res) => {
	res.send(responses.success_ack);
});

app.post('/rating', (req, res) => {
	res.send(responses.success_ack);
});

app.post('/support', (req, res) => {
	res.send(responses.success_ack);
});

app.listen(process.env.BPP_PORT, () => {
	console.log(`BPP Listening on port ${process.env.BPP_PORT}`);
});
