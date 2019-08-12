const data = require('./data/customerData.json');

const teleComProvider = require('./services')(data);

const initialiseEndpoints = (app) => {
    app.get('/numbers', (req, res) => res.send(teleComProvider.getAll()));
    app.get('/numbers/:id(\\d+)/', (req, res) => res.send(teleComProvider.getNumberById(req.params.id)));
    app.patch('/numbers/:id(\\d+)/activate/:number', (req, res) => res.status(204).send(teleComProvider.activateNumber(req.params.id, req.params.number)));
    app.use((err, req, res, next) => {
        if(err.name === "CustomerNotFound") {
            res.status(404);
        }
        if (err.name ===  "NumberNotFound") {
            res.status(404);
        }
        res.json(err);
    });
}

module.exports = initialiseEndpoints;