const express = require('express');
const routes = express.Router();
const Student = require('../models/students');
const studentController = require('../controller/studentController');

//const {verifyAccessToken} = require ('../helpers/jwtHelper')verifyAccessToken,

//get a list of students from the database

routes.get('/students', (req,res)=> {
    res.send({type:'Get Request Done'});
});

routes.get('/api/allResults',studentController.getAllstudents)

//get a specific student id

routes.get('/students/:id', (req,res)=> {
    res.send({type:'Update Request'});
});

routes.get('/api/getStudentByid/:id',studentController.getStudentById)



//add student to the db

routes.post('/students', (req,res)=> {
  res.send({type:'Post Request Done'});
});



routes.post('/api/addstudent',studentController.addstudent)




//update students in the DB

routes.put('/students/:id', (req,res)=> {
    res.send({type:'Update Request'});
});

routes.patch('/api/updateStudent/:id',studentController.updateStudent)




//delete student to the db

routes.delete('/students/:id', (req,res)=> {
    res.send({type:'Delete Request'});
});

routes.delete('/api/deleteStudent/:id',studentController.deleteStudent)










module.exports = routes;