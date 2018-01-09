require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;
var morgan = require('morgan');

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

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    res.header('Access-Control-Allow-Headers', 'x-access-token, Content-Type, X-Requested-With');
    
    next();
}

app.use(allowCrossDomain);
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }));

// mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL).then(
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
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {      
            if (err) {
                return res.status(403).json({ success: false, message: 'Failed to authenticate token.' });   
            } else {
                req.decoded = decoded;    
                next();
            }
        });
    } else {
        return res.status(403).json({ 
            success: false, 
            message: 'No token provided.' 
        });     
    }
});

const routes = require('./api/routes/smartHomeRoutes');

app.options('/*', (req, res, next) => { // CORS OPTIONS vastus
    res.send(200);
    next();
});

app.use('/api', apiRoutes);
routes(app);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});