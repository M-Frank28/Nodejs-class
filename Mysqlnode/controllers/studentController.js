const db = require('../models/indexStart');
const createError = require('http-errors');

//use the model 

const Student = db.students
const Course = db.courses

module.exports= {

    //add student
    addStudent : async(req,res,next)=>{

        try{
            let info = {
              
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender

            }

            const addStudent = await Student.Create(info)
            res.status(200).send(addStudent)

        } catch (error){
            next(error)
        }

    },






}