const express = require('express');
const routes = express.Router();

const authController = require('../controller/authController');


  routes.post('/registerUser',authController.registerUser)

module.exports = routes;