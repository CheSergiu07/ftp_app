const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/mongodb.config');

const app = express();

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to the database'))
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });

app.get('/', (req, res) => {
    res.json({"message": "Welcome to the FTP application."});
});

// Aici se pot adauga alte rute

app.listen(3000, () => console.log('Server is listening on port 3000'));
