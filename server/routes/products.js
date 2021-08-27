var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');

// get All products
router.get('/', function (req, res, next) {
    Product.find((err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

// get a specific product
router.get('/:id', function (req, res, next) {
Product.findById(req.params.id, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

// posting a new product
router.post('/', function (req, res, next) {
    Product.create(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});


// deleting a  product
router.delete('/:id', function (req, res, next) {

        Product.findByIdAndDelete(req.params.id,(error,data) =>{
            if(error) throw error;
            res.send('Deleted Successfully');
        })
    });


    // updating a product
router.patch('/:id', function (req, res, next) {
        Product.findByIdAndUpdate(req.params.id,req.body,(error,data) =>{
            if(error) throw error;
            res.send(data);
        })
    });

module.exports = router;
