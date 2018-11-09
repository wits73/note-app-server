const express = require('express');
const router = express.Router();
const Notebook = require('../models/notebook');

router.get('/notebook', function(req, res, next){
    Notebook.find({}).then((notebooks) => {
        res.send(notebooks);
    })
});

router.get('/notebook/:id', function(req, res, next){
    Notebook.findById({_id:req.params.id}).then((notebook) => {
        res.send(notebook);
    })
});

router.post('/notebook', function(req, res, next){
    Notebook.create(req.body).then(function(notebook){
        res.send(notebook);
    }).catch(next);
});

router.put('/notebook/:id', function(req, res, next){
    Notebook.findByIdAndUpdate({_id:req.params.id}, req.body).then(() => {
        Notebook.findOne({_id:req.params.id}).then((notebook) => {
            res.send(notebook);
        });
    })
});

router.delete('/notebook/:id', function(req, res, next){
    Notebook.findByIdAndRemove({_id:req.params.id}).then((notebook) => {
        res.send(notebook);
    })
});

router.post('/notebook/:id/note', function(req, res, next){
    Notebook.findById({_id:req.params.id}).then((notebook) => {
        res.send(notebook);
    })
});


module.exports = router;