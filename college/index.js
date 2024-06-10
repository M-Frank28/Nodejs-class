const express = require('express');
const app = express();
app.listen(process.env.port || 4000, function (){
    console.log('Now listening for requests on:http://localhost:4000');
});
