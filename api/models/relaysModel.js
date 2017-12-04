const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const RealysSchema = new Schema ({
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
    },
    switchedOn: {
        type: Boolean,
        default: false
    },
    switchedDate: {
        type: Date
    }
});

module.exports = mongoose.model('Relay', RealysSchema);