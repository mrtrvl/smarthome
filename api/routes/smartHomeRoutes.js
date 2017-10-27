'use strict';

module.exports = (app) => {
    let places = require('../controllers/placesController');

    app.route('/api/places')
        .get(places.allPlaces)
        .post(places.createPlace);
        
    app.route('/api/places/:placeId')
        .get(places.getPlace)
        .put(places.updatePlace);

    let sensors = require('../controllers/sensorsController');

    app.route('/api/sensors')
        .get(sensors.allSensors)
        .post(sensors.createSensor);
        
    app.route('/api/sensors/:sensorId')
        .get(sensors.getSensor)
        .put(sensors.updateSensor);

    app.route('/api/places/:placeId/sensors')
        .get(sensors.allSensorsInPlace);

    let temperatures = require('../controllers/temperaturesController');
        
        app.route('/api/temperatures')
            .get(temperatures.allTemperatures)
            .post(temperatures.createTemperature);
                
        app.route('/api/temperatures/:sensorId')
            .get(temperatures.getTemperatures);
};