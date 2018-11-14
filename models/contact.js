const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    gender : { type: String },
    name : { 
        type: Map,
        of: String
    },
    location : { 
        type: Map,
        of: String
    },
    email : { type: String },
    login : { 
        type: Map,
        of: String
    },
    dob : { 
        type: Date
    },
    registered : { 
        type: Date,
        default: Date.now
    },
    phone : { type: String },
    cell : { type: String },
    picture : { 
        type: Map,
        of: String
    },
    nat : { type: String }
});

const Contact = mongoose.model('contact', ContactSchema, 'contact');
module.exports = Contact;

