const User = require ('../models/authModel');
const createError =require('http-errors')
const {authaaSchema} = require('../helpers/validationSchema')
const {signAccessToken} = require('../helpers/jwtHelper')



module.exports = {

 // Adding data to the DB

 /*addAuth:async(req,res,next)=>{
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

},*/


// registering the User

registerUser: async(req,res, next)=>{

    try{
        const {email,password}=req.body
        if(!email || !password)throw createError.BadRequest
        
        const result = await authaaSchema.validateAsync(req.body)

        const Exists = await User.findOne({email:email})
        
        if (Exists) throw createError.Conflict(`${email} is already registered`)
            const user = new User(result)

        const savedUser = await user.save()
        const accessToken = await signAccessToken(savedUser.id)

        res.send({accessToken});
    }catch (error) {
        if(error.isJoi === true) error.status = 422
        next(error)
    }
},


loginUser: async (req,res,next)=>{
    try{
        const result = await authaaSchema.validateAsync(req.body)
        res.send(result)
    }catch (error){
        next(error)
    }
}

}



   