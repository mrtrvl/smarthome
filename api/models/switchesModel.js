'use strict';
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SwitcheSchema = new Schema ({
    name: {
        type: String,
        required: 'Enter the new name of the switch'
    },
    description: {
        type: String,
        required: 'Enter the description for the switch'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    PlaceId: {
        type: String,
        required: 'Enter the place id'
    }
});

module.exports = mongoose.model('Sensor', SwitcheSchema);