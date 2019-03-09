const router = require("express").Router();
var db = require("../../models");

router.get("/", function(req, res) {
  db.Products.findAll({}).then((response) => {
    res.json(response)
  });
});

module.exports = router;
