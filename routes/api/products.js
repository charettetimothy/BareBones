const router = require("express").Router();
var db = require("../../models");

router.get("/", function(req, res) {
  db.Products.findAll({}).then((response) => {
    // console.log(response);
    res.json(response)
  });

  //     res.json({
  //       productName: req.firstName,
  //       description: req.lastName,
  //       quantity: req.quantity,
  //       price: req.user.price,
  //       imgUrl: req.user.imgUrl,
  //       createdAt: req.user.createdAt,
  //       updatedAt: req.user.updatedAt
  // });
});

module.exports = router;
