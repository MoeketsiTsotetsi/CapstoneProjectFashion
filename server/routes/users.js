var express = require('express');
const { data } = require('jquery');
var router = express.Router();
var User = require('../models/userModel');

// get All Users
router.get('/', function (req, res, next) {
    User.find((err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

// get a specific user
router.get('/:id', function (req, res, next) {
User.findById(req.params.id, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

// posting a new user
router.post('/', function (req, res, next) {
    User.create(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});


// deleting a  user
router.delete('/:id', function (req, res, next) {

        User.findByIdAndDelete(req.params.id,(error,data) =>{
            if(error) throw error;
            res.send('Deleted Successfully');
        })
    });


    // deleting a user
router.patch('/:id', function (req, res, next) {
        User.findByIdAndUpdate(req.params.id,req.body,(error,data) =>{
            if(error) throw error;
            res.send(data);
        })
    });

module.exports = router;
