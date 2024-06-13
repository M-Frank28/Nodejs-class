const express = require('express');
const routes = express.Router();
const Student = require('../models/students');

//get a list of students from the database

routes.get('/students', (req,res)=> {
    res.send({type:'Get Request Done'});
});


//add student to the db

routes.post('/students', (req,res)=> {
  res.send({type:'Post Request Done'});
});



routes.post('/addstudent', async(req,res,next)=>{
    //console.log(req.body);
    //res.send(req.body);
    try{
        const student = new Student(req.body)
        const result = await student.save();
        res.send(result)
    } catch(error) {
        console.log(error.message);
    }

})




//update students in the DB

routes.put('/students/:id', (req,res)=> {
    res.send({type:'Update Request'});
});

//delete student to the db

routes.delete('/students/:id', (req,res)=> {
    res.send({type:'Delete Request'});
});

module.exports = routes;