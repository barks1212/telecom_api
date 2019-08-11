const data = require('./data/customerData.json');
const teleComProvider = require('./services')(data);

const initialiseEndpoints = (app) => {
    app.get('/numbers', (req, res) => res.send(teleComProvider.getAll()));
    app.get('/numbers/:id', (req, res) => res.send(teleComProvider.getNumberById(req.params.id)));
    app.put('/numbers/activate/:id', (req, res) => res.send(teleComProvider.activateNumber(req.params.id)));
}

module.exports = initialiseEndpoints;