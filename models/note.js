const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title   : { type: String },
    text    : { type: String },
    lastModifiedOn  : { 
        type: Date, 
        default: Date.now 
    },
    notebooks : [Notebook]
});

mongoose.model('note', noteSchema, 'notesTest');

module.exports = note;