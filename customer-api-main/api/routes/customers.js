const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Customer = require('../models/customer');

// Handles and returns all the customers from the Database
router.get('/', (req, res, next) => {
    Customer.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

// Handles and post the customer details to Database
router.post('/', (req, res, next) => {
    // Storing it in the MongoDB datatbase
    const customer = new Customer({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        message: req.body.message 
    });
    customer
        .save()
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err));
        res.status(200).json({
        message: "Handling POST requests to /customers",
        createdCustomer: customer
    })
});

// Check if the customer is a VIP customer or not
router.get('/:customerId', (req, res, next) => {
    const id = req.params.customerId;
    Customer.findById(id)
        .exec()
        .then(doc => {
            console.log("From Database: " + doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;