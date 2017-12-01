const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TemperatureSchema = new Schema ({
    sensorId: {
        type: String,
        required: 'Enter the id of the sensor'
    },
    temperature: {
        type: Number,
        required: 'Enter the temperature for sensor'
    },
    measuredDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Temperature', TemperatureSchema);