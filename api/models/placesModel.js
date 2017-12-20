const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const PlaceSchema = new Schema ({
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
    },
    ipAddress: {
        type: String
    },
    updatedDate: {
        type: Date
    },
    diskSize: {
        type: Number
    },
    diskFree: {
        type: Number
    }
});

module.exports = mongoose.model('Place', PlaceSchema);