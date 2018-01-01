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
         
        app.route('/api/relays/:relayId')
            .post(relays.updateRelayState);

        app.route('/api/relays/:relayId')
            .get(relays.getRelay)
            .put(relays.updateRelay);
    
/*         app.route('/api/places/:placeId/relays')
            .get(relays.allRelaysInPlace); */

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

    const userHandlers = require('../controllers/usersController');
        app.route('/api/auth/register')
            .post(userHandlers.register);

        app.route('/auth/signin')
            .post(userHandlers.signIn);
        
        app.route('/api/users')
            .get(userHandlers.users);

        app.options('/*',function(req, res, next){ // CORS OPTIONS vastus
            res.send(200);
        });
};