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
    
    },

    getAllstudents: async (req,res,next)=>{
        
        
        try{

            Student.find({}).then((student)=>{
                res.send(student)
            });

        } catch(error) {
            console.log(error.message);

        }

    },

    updateStudent:async(req,res,next)=> {
        try{
            const id = req.params.id;
            const update = req.body;
            const options ={new: true}
            const result = await Student.findByIdAndUpdate(id,update,options)
             res.send(result);
        }catch(error){
    
            console.log(error.message);
        }
    }
}