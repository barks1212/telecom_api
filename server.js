const express = require('express');

const app = express();

const port = 3000;

app.get('/all',(req, res) => res.send('base'));

app.listen(port);