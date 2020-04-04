const express = require('express');

const SessionController = require('./controllers/SessionController');
const AccountController = require('./controllers/AccountController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/', (request, response) => {
    response.send("Hello World !!!");
});
routes.post('/session', SessionController.create);
routes.post('/account', AccountController.create);
routes.post('/incident', IncidentController.create);
routes.get('/incident', IncidentController.index);
routes.delete('/incident', IncidentController.delete);

module.exports = routes;