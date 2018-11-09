const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config();

const mongoose = require('mongoose');
const dbPassword = process.env.DB_PASSWORD;
const uri = `mongodb+srv://tkim25:${dbPassword}@rest-api-cihb0.mongodb.net/test?retryWrites=true`;

mongoose.connect(uri, {dbName:'rest-api'});
mongoose.Promise = global.Promise;



app.get('/note', function(req, res){
    res.send({'type':'GET'});
});



app.listen(3000, function(){
    console.log('Running server with 3000 port');
});