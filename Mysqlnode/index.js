const express = require('express');
const cors = require('cors');
require ('dotenv').config();
require('./models/indexStart')

const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const app = express()









app.use(helmet())
//limit request from same ip

const limiter=rateLimit({

max: 5,
windowMs: 60 * 60 * 1000,
message : 'Too many requests from this IP, pls  try again an hour!'

})
app.use('/api', limiter)

//app.use(indexStart);

var corOptions = {

    origin : 'https://localhost:3000'

}

app.use(cors(corOptions));


const studentRoute = require ('./routes/studentRoutes');


app.use(express.json());

app.use(express.urlencoded({extended: true}));


app.use('http://localhost:5000/api/Student/addStudent', studentRoute)



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {

    console.log(`Server is running on port: ${PORT}`)
 
})




app.use((req, res, next)=>{
    const err= new Error("Not Found");
    err.status = 404
    next(err)
})

//Error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status|| 500,
            message:err.message

        }
    })
})
