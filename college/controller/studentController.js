const Student = require('../models/students');

module.exports= {

    addstudent:async(req,res,next)=>{
        //console.log(req.body);
        //res.send(req.body);
        try{
            const student = new Student(req.body)
            const result = await student.save();
            res.send(result)
        } catch(error) {
            console.log(error.message);
        }
    
    }
}