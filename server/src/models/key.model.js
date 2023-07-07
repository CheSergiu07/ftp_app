const mongoose = require('mongoose');

const KeySchema = mongoose.Schema({
    key: String,
    // Alte campuri pot fi adaugate aici
});

module.exports = mongoose.model('Key', KeySchema);
