'use strict';
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RealysSchema = new Schema ({
    name: {
        type: String,
        required: 'Enter the new name of the relay'
    },
    description: {
        type: String,
        required: 'Enter the description for the relay'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    placeId: {
        type: String,
        required: 'Enter the place id'
    }
});

module.exports = mongoose.model('Relay', RealysSchema);