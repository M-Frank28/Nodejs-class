const Auth = require('../models/authModel');
const createError =require('http-errors')

module.exports = {


 // Adding data to the DB

 addAuth:async(req,res,next)=>{
    //console.log(req.body);
    //res.send(req.body);
    try{
        const auth = new Auth(req.body)
        const result = await auth.save();
        res.send(result)
    } catch(error) {
        console.log(error.message);

        if(error.name ==="ValidationError") {
            next(createError(422, error.message))
            return;
    }
    next(error)
}

}






}