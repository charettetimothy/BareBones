const express = require('express')
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
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'muowdopceqgxjn2b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'g5abz2zhkr8jogv0',
    password: 'ru69102afx1l9akt',
    database: 'oh4v074oxt5i9wen'
  })
}
// Add routes
app.use(passport.initialize());
app.use(passport.session());
app.use(require("body-parser").text());
app.use(routes)

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


