const express = require('express');
const routes = express.Router();

routes.post('/users', (request, response) => {
    return response.json({nome:'Hello World'});
});

module.exports = routes;
