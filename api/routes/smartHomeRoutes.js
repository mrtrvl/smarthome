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
        
    app.route('/api/places/:sensorId')
        .get(sensors.getSensor)
        .put(sensors.updateSensor);
};
