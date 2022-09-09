'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
	console.log(`BAP Listening on port ${process.env.BAP_PORT}`);
});
