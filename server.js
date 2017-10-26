const express = require('express');
const app = express();
let mongoose = require('mongoose');
const port = 3000;

let Place = require('./api/models/placesModel');
let Sensor = require('./api/models/sensorsModel');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://10.10.10.86/smartHome').then(
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