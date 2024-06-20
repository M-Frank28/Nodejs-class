const express = require('express');
const routes = express.Router();

const authController = require('../controller/authController');


//add user to the db

routes.post('/Auth', (req,res)=> {
    res.send({type:'Post Request Done'});
  });
  
  
  
  routes.post('/addAuth',authController.addAuth)





module.exports = routes;