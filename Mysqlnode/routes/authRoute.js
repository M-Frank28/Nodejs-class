const express = require('express');
const routes = express.Router();
const {verifyAccessToken} = require ('../helpers/jwtHelper')

const authController = require('../controllers/authController');


routes.post('/registerUser',verifyAccessToken,authController.registerUser)
routes.post('/loginUser',authController.loginUser)



module.exports = routes