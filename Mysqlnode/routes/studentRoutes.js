const express = require('express');
const routes = express.Router();

const studentController = require('../controllers/studentController');


routes.post('/api/addstudent',studentController.addStudent)


module.exports = routes