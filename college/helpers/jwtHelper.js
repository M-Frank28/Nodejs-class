const JWT = require ('jsonwebtoken');
const createError = require ('http-errors');
const User = require ('../models/authModel');



module.exports = {
signAccessToken: (UserId)=> {

    return new Promise((resolve,reject)=>{

        const payload={}
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const options = {

            expiresIn: '7m',
            issuer: 'http://localhost:4000',
            audience: UserId,
        }
        JWT.sign(payload, secret, options, (error,token)=>{
            if(error) {
                console.log(error.message)
                reject(createError.InternalServerError());
            }

            resolve(token);
        })
    })
},

}