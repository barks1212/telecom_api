const express = require('express');
const teleComProvider = require('./services');
const data = require('./data/customerData.json')

const app = express();

const port = 3000;

app.get('/all', (req, res) => res.send(teleComProvider(data).getAll()));

app.listen(port, () => console.log(`Listening on port ${port}!`));