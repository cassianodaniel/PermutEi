const express = require('express');
const routes = express.Router();
//const connection = require('./database/connection'); deve estar em cada controller

const UserController = require('./controllers/UserController');

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.delete('/users', UserController.delete);
routes.post('/users', UserController.update);

module.exports = routes;
