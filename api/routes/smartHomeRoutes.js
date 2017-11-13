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

    let relays = require('../controllers/relaysController');
    
        app.route('/api/relays')
            .get(relays.allRelays)
            .post(relays.createRelay);
            
        app.route('/api/relays/:sensorId')
            .get(relays.getRelay)
            .put(relays.updateRelay);
    
        app.route('/api/places/:placeId/relays')
            .get(relays.allRelaysInPlace);

    let temperatures = require('../controllers/temperaturesController');
        
        app.route('/api/temperatures')
            .get(temperatures.allTemperatures)
            .post(temperatures.createTemperature);
        
        app.route('/api/sensors/:sensorId/temperatures/:count')
            .get(temperatures.temperaturesFromSensor);

        app.route('/api/sensors/:sensorId/temperatures/')
            .get(temperatures.temperaturesFromSensor);

        app.route('/api/sensors/:sensorId/temperature')
            .get(temperatures.getLastTemperatureFromSensor);

    let relayActions = require('../controllers/relayActionsController');

        app.route('/api/relaystates/')
            .get(relayActions.allRelayActions)
            .post(relayActions.updateRelayState);
};