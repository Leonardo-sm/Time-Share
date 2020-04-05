const express = require('express');

const SessionController = require('./controllers/SessionController');
const AccountController = require('./controllers/AccountController');
const IncidentController = require('./controllers/IncidentController');
const ProfilesController = require('./controllers/ProfilesController');

const routes = express.Router();

routes.get('/', (request, response) => {
    response.send("Hello World !!!");
});

routes.post('/sessions', SessionController.create);
routes.get('/profiles', ProfilesController.index);
routes.post('/accounts', AccountController.create);
routes.get('/accounts', AccountController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
