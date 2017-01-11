'use strict';

const express  = require('express');
const app      = express();
const port     = 8080;
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const configDB = require('./config/database.js');

// connect to our database using the url in the configDB file
mongoose.connect(configDB.url);

app.use(morgan('dev')); // configure the logger
app.use(bodyParser.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// give the root directory access to be served to the client side
app.use(express.static( __dirname));

// set up our routes
require('./app/routes.js')(app, mongoose);

app.listen(port);
console.log('The magic happens on port ' + port);
