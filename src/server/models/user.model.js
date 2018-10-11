var mongoose = require('mongoose');
var schema= mongoose.Schema;

var userSchema = new schema({
    name: String,
    age: Number,
    phoneNo : Number
});

module.exports = mongoose.model('User', userSchema);