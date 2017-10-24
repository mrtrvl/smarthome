const express = require('express');
const app = express();
let mongoose = require('mongoose');
const port = 3000;

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./api/routes/smartHomeRoutes');
routes(app);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});