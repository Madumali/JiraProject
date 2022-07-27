const express = require("express"); //import express
const app = express(); //initialize express
const morgan = require('morgan'); //all requests going through this.nothing doing just locking
const cors = require('cors'); //cross origin resourse sharing.a set of headers sent by server to browser 
// const errorHandler = require('./_helpers/error_handler');
const errorHandler = require("./_helpers/error_handler");
app.use(errorHandler);
///Routes go here
const useRoutes = require("./user/users.controller")

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //POST n PUT body requests
app.use(express.json()); //convert json objects to js objects
app.use(cors()); //OPTION requests(POST,GET,PUT) send before actual request


app.use('/users',useRoutes)


//error handling for routes that cannot be found
app.use((req, res, next) => {
   const error = new Error("Not Found");
   error.status = 404;
   next();
})

//Error handling for all the other errors

app.use((error,req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
})

module.exports = app;