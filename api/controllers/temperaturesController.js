const mongoose = require('mongoose');
const Temperature = mongoose.model('Temperature');
const Sensor = mongoose.model('Sensor');

exports.allTemperatures = async (req, res) => {

    try {
        const count = 100;
        const temperatures = await Temperature.find({}).sort({_id:-1}).limit(count);
        res.status(200).send(temperatures);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getTemperaturesOfPlace = async (req, res) => {
    
    try {
        const { placeId } = req.params;

        const sensors = await Sensor.find({ "placeId": placeId });

        if (!mongoose.Types.ObjectId.isValid(placeId)) {
            throw new Error('No proper place id specified!');
        }
        console.log('Before array function');

        let temperatures = [];
        
        for (let sensor of sensors) {

            const sensorId = sensor._id;
            const temperature = await Temperature.findOne({ sensorId }).sort({ _id:-1 });
            
            temperatures.push(temperature);
        };
        
        console.log(`Temperatures before res.send: ${ temperatures }`);

        res.status(200).send(temperatures);

    } catch (err) {
       res.status(400).send(err); 
    }
}


exports.temperaturesFromSensor = async (req, res) => {

    try {
        const { sensorId } = req.params;
        let { count } = req.params;

        if (!mongoose.Types.ObjectId.isValid(sensorId)) {
            throw new Error('No proper sensor id specified!');
        }

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

        if (!mongoose.Types.ObjectId.isValid(sensorId)) {
            throw new Error('No proper sensor id specified!');
        }        

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

        const sensor = await Sensor.find({ sensorId });
        if (!sensor) {
            throw new Error('There is no sensor with this id!');
        }

        const newTemperature = new Temperature({temperature, sensorId});
        await newTemperature.save();

        res.status(200).send(newTemperature);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

