const express = require('express');
const routes = express.Router();

const studentController = require('../controllers/studentController');


routes.post('/addStudent',studentController.addStudent)
routes.get('/getStudentByid/:id',studentController. getStudentById)
//routes.get('/api/getStudentByid/:id',studentController.getStudentById)
routes.get('/getAllStudents',studentController.getStudents )



module.exports = routes