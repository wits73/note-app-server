const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/contact', function(req, res, next){
    Contact.find({}).then((notebooks) => {
        res.send(notebooks);
    });
});

router.post('/contact', function(req, res, next){
    Contact.create(req.body).then(function(notebook){
        res.send(notebook);
    }).catch(next)
});