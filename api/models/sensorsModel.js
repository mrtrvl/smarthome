'use strict';
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SensorSchema = new Schema ({
    name: {
        type: String,
        required: 'Enter the new name of the sensor'
    },
    description: {
        type: String,
        required: 'Enter the description for the sensor'
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

module.exports = mongoose.model('Sensor', SensorSchema);