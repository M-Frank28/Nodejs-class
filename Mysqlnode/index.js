const express = require('express');
const cors = require('cors');
require ('dotenv').config();
require('./models/indexStart')

const app = express()

//app.use(indexStart);

var corOptions = {

    origin : 'https://localhost:3000'

}

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {

    console.log(`Server is running on port: ${PORT}`)
 
})