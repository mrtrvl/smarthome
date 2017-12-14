const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

const Place = require('./api/models/placesModel');
const Sensor = require('./api/models/sensorsModel');
const Relay = require('./api/models/relaysModel');
const Temperature = require('./api/models/temperaturesModel');
const User = require('./api/models/userModel');
const jwt = require('jsonwebtoken');
const userController = require('./api/controllers/usersController');

const apiRoutes = express.Router();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/smartHome').then(
    () => {
        console.log(`Connected to database`);
    },
    (err) => {
        console.log(err);
    }
);

apiRoutes.use((req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        console.log(token);
        jwt.verify(token, 'password', function(err, decoded) {      
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });    
            } else {
                req.decoded = decoded;    
                next();
            }
        });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });     
    }
});

const routes = require('./api/routes/smartHomeRoutes');

app.use('/api', apiRoutes);
routes(app);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});