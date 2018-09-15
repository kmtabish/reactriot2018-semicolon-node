const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    uname: String,
    extraInfo: {}
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);