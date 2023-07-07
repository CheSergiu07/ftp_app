const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user.model');

passport.use(new LocalStrategy(
    function(username, password, done) {
        // Aici va trebui sa verifici userul si parola.
        // Aceasta este doar o configurare de baza, fara logica reala.
    }
));

module.exports = passport;
