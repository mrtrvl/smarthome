'use strict';

module.exports = (app) => {
    let smartHome = require('../controllers/placesController');

    app.route('/api/places')
        .get(smartHome.allPlaces)
        .post(smartHome.createaPlace);
        
    app.route('/api/places/:id')
        .get(smartHome.getPlace)
        .put(smartHome.updatePlace);
};
