const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    email : String,
    password: String,
    dateCreated: {
                type: Date,
                default: Date.now()
                }
});

module.exports = mongoose.model('users',userSchema)