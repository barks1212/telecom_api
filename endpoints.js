const data = require('./data/customerData.json');
const teleComProvider = require('./services')(data);

const initialiseEndpoints = (app) => {
    app.get('/numbers', (req, res) => res.send(teleComProvider.getAll()));
    app.get('/numbers/:id(\\d+)/', (req, res) => res.send(teleComProvider.getNumberById(req.params.id)));
    app.put('/numbers/:id(\\d+)/activate/:number', (req, res) => res.send(teleComProvider.activateNumber(req.params.id)));
    app.use((err, req, res, next) => {
        if(err.name === "CustomerNotFound") {
            res.status(404);
        }
        res.json(err);
    });
}

module.exports = initialiseEndpoints;