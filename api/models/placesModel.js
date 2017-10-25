'use strict';
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PlaceSchema = new Schema ({
    name: {
        type: String,
        required: 'Enter the new name of the place'
    },
    description: {
        type: String,
        required: 'Enter the description for the place'
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Place', PlaceSchema);