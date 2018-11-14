const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('dotenv').config();

const dbPassword = process.env.DB_PASSWORD;
const uri = `mongodb+srv://tkim25:${dbPassword}@rest-api-cihb0.mongodb.net/test?retryWrites=true`;

mongoose.connect(uri, {dbName:'rest-api'});
mongoose.Promise = global.Promise;

app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(3000, function(){
    console.log('Running server with 3000 port');
});