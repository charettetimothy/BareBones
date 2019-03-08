const router = require('express').Router()
var db = require("../../models");

// Matches with "/api/tables"
router.route('/').get(function (req, res) {
  // !make call to db using sql
  // respond to front end with dbData
  
})
// make a post route to insert new products
module.exports = router
