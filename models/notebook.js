const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const NoteSchema = new Schema({
    title   : { type: String },
    text    : { type: String },
    lastModifiedOn  : { 
        type: Date, 
        default: Date.now 
    }
});

const NotebookSchema = new Schema({
    topic   : { type: String },
    notebookModifiedOn  : { 
        type: Date, 
        default: Date.now 
    },
    notes: [NoteSchema]
});

const Notebook = mongoose.model('notebook', NotebookSchema, 'notebook');

module.exports = Notebook;