const mongoose = require('mongoose');
const Temperature = mongoose.model('Temperature');

exports.allTemperatures = async (req, res) => {

    try {
        const count = 100;
        const temperatures = await Temperature.find({}).sort({_id:-1}).limit(count);
        res.status(200).send(temperatures);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.temperaturesFromSensor = async (req, res) => {

    try {
        const { sensorId } = req.params;
        let { count } = req.params;

        if (isNaN(count)){
            count = 10;
        }
        const temperatures = await Temperature.find({ sensorId }).sort({_id:-1}).limit(count);
        if (!temperatures) {
            throw new Error('No temperatures!');
        }
        res.status(200).send(temperatures);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getLastTemperatureFromSensor = async (req, res) => {
    try {
        const { sensorId } = req.params;

        const temperatures = await Temperature.find({ sensorId }).sort({_id:-1}).limit(1);
        if (!temperatures) {
            throw new Error('No temperatures!');
        }
        res.status(200).send(temperatures);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.createTemperature = async (req, res) => {
    try {
        const { temperature, sensorId } = req.body;
        if (!temperature || !sensorId) {
            throw new Error('Some fields are missing!');
        }

        const newTemperature = new Temperature({temperature, sensorId});
        await newTemperature.save();

        res.status(200).send(newTemperature);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

