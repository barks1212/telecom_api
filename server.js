const express = require('express');
const endpoints = require('./endpoints');

const app = express();
const port = 3000;

endpoints(app);

app.listen(port, () => console.log(`Listening on port ${port}!`));