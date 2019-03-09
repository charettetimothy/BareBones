const express = require('express')
// cons/t User = require('./models/Users')
// const mongoose = require("mongoose");
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3001
var db = require("./models")
var passport = require("./config/passport.js");
const stripe = require("stripe")(process.env.STRIPESECRET);
// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}
// Add routes, both API and view
app.use(passport.initialize());
app.use(passport.session());
app.use(require("body-parser").text());
app.use(routes)

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


