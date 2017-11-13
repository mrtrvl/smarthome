const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

const Place = require('./api/models/placesModel');
const Sensor = require('./api/models/sensorsModel');
const Relay = require('./api/models/relaysModel');
const Temperature = require('./api/models/temperaturesModel');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/smartHome').then(
    () => {
        console.log(`Connected to database`);
    },
    (err) => {
        console.log(err);
    }
);

let routes = require('./api/routes/smartHomeRoutes');
routes(app);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});