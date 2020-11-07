const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const customerRoutes = require('./api/routes/customers');

mongoose.connect('mongodb+srv://dru:1318@test.gzmtv.azure.mongodb.net/user?retryWrites=true&w=majority',{useUnifiedTopology:true, useNewUrlParser: true});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/customers', customerRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found any routes');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;