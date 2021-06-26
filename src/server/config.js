const path = require('path');

const express = require('express');

const morgan = require('morgan');
const errorHandler = require('errorhandler');

module.exports = app =>{
    // SERVER CONFIG-----------

    // SET GLOBAL VARIABLES
    app.set('env', 'dev'); // dev | prod
    app.set('port', process.env.PORT || 3000); // IN PRODUCTION MUST CHANGE THIS PORT TO 80
    app.set('views', path.join(__dirname, '../views')); // ABSOLUTE PATH OF THE VIEWS FOLDER

    // MIDDLEWARE
    app.use(morgan('dev')); // CHANGE IT TO ANOTHER IN PRODUCTION
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(express.json());

    // STATIC FILES
    app.use(express.static(path.join(__dirname, '../public')));
    // API ROUTE
    app.use('/api', require('../routes/api.routes'));

    // ERROR HANDLER
    if('dev' === app.get('env')){
        // ACTIVATE ERROR HANDLER
        app.use(errorHandler)
    }

    // RETURN ALL CONFIG TO THE MAIN FILE
    return app;
}