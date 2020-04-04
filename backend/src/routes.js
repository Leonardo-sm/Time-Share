const express = require('express');

const SessionController = require('./controllers/SessionController');
const AccountController = require('./controllers/AccountController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/', (request, response) => {
    response.send("Hello World !!!");
});

routes.post('/sessions', SessionController.create);
routes.post('/accounts', AccountController.create);
routes.get('/accounts', AccountController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;