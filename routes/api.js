const express = require('express');
const router = express.Router();
const Notebook = require('../models/notebook');
const Contact = require('../models/contact');

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

// start contact
router.delete('/contact/:id', function(req, res, next){
    Contact.findByIdAndRemove({_id:req.params.id}).then((contact) => {
        res.send(contact);
    });
});

router.put('/contact/:id', function(req, res, next){
    Contact.findByIdAndUpdate({_id:req.params.id}, req.body).then(() => {
        Contact.findOne({_id:req.params.id}).then((contact) => {
            res.send(contact);
        });
    });
})

router.get('/contact', function(req, res, next){
    Contact.find({}).then((contacts) => {
        res.send(contacts);
    });
});

router.get('/contact/:id', function(req, res, next){
    Contact.findById({_id:req.params.id}).then((contact) => {
        res.send(contact);
    });

});

router.post('/contact', function(req, res, next){
    Contact.create(req.body).then(function(contact){
        res.send(contact);
    }).catch(next)
});


module.exports = router;