const express = require('express');

const SessionsController = require('./controllers/SessionsController');
const AccountsController = require('./controllers/AccountsController');
const IncidentsController = require('./controllers/IncidentsController');

const routes = express.Router();

routes.get('/', (request, response) => {
    response.send("Hello World !!!");
});
routes.post('/sessions', SessionsController.create);
routes.post('/accounts', AccountsController.create);
//routes.post('/incidents', IncidentsController.create);
//routes.get('/incidents', IncidentsController.index);
//routes.delete('/incidents', IncidentsController.delete);

module.exports = routes;