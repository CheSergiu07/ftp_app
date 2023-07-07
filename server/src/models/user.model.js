const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    // Alte campuri pot fi adaugate aici
});

module.exports = mongoose.model('User', UserSchema);
