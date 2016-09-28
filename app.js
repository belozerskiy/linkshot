'use strict'
//Constant
const HTTP_PORT = 8080

//Modules
const express = require('express'),
    exphbs = require('express-handlebars'),
    path = require('path'),
    bodyParser = require('body-parser'),
    routes = require('./routes');

//Init
const app = express();

//config
app.engine('hbs', exphbs({ extname: '.hbs', defaultLayout: path.join(__dirname, 'views', 'main')}));
app.set('view engine', 'hbs');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use(routes);

//404
app.use(require('./middlewares/404'));

//500
if(process.env.NODE_ENV == 'production') {
    app.use((err, req, res, next) => {
        res.status(500);
        res.send('Bad Request');
        console.err(err.message)
    });
}

if(process.env.NODE_ENV == 'development') {
    app.use((err, req, res, next) => {
        res.status(500);
        res.send('Bad Request', err.message);
        console.err(err.message)
    });
}

//Unknow error handler
process.on('uncaughtException', (err) => {
    console.log(`Uncaught exception. ${err}`);
});

//Listen
app.listen(HTTP_PORT, () => {
    console.log("Server starting on port: " + HTTP_PORT);
});

