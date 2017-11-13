'use strict';
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RelayActionsSchema = new Schema ({
    relayId: {
        type: String,
        required: 'Enter the id of the relay'
    },
    turnedOn: {
        type: Boolean,
        required: 'Enter status of the relay (On - true, Off - false)'
    },
    actionDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('RelayAction', RelayActionsSchema);