const mongoose = require('mongoose');
const Sensor = mongoose.model('Sensor');

exports.allSensors = async (req, res) => {
    try {
        const sensors = await Sensor.find({});
        res.status(200).send(sensors);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.allSensorsInPlace = async (req, res) => {
    try {
        const { placeId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(placeId)) {
            throw new Error('No proper place id specified!');
        }

        const sensors = await Sensor.find({"placeId": placeId});
        res.status(200).send(sensors);

    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.createSensor = async (req, res) => {
    
    try {
        const { name, description, placeId } = req.body;
        if (!name || !description || !placeId) {
            throw new Error('Some fields are not specified!');
        }

        if (!mongoose.Types.ObjectId.isValid(placeId)) {
            throw new Error('No proper place id specified!');
        }

        const newSensor = new Sensor({placeId, name, description});

        await newSensor.save();
        res.status(200).send(newSensor);

    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getSensor = async (req, res) => {
    try {
        const { sensorId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(sensorId)) {
            throw new Error('No proper sensor id specified!');
        }

        const sensor = await Sensor.findById(sensorId);

        res.status(200).send(sensor);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.updateSensor = (req, res) => {
    //TODO
};
