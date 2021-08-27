var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    type:String,
    username: String,
    password: String
    
});

module.exports = mongoose.model('User', userSchema);