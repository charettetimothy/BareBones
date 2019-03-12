const router = require("express").Router();
var db = require("../../models");
var passport = require("../../config/passport");
// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", function(req, res) {
  db.Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    imgUrl: req.body.imgUrl
  })
    .then(function() {
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

router.post("/login", passport.authenticate("local"), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the member's log page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  const authUser = {
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email
  };
  res.json(authUser);
});

// Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

//   // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     // The user is not logged in, send back an empty object
//     if (!req.user) {
//       res.json({});
//     } else {
//       res.json({
//         id: req.user.id,
//         firstName: req.user.firstName,
//         lastName: req.user.lastName,
//         email: req.user.email,
//         imgUrl: req.user.imgUrl,
//         createdAt: req.user.createdAt,
//         updatedAt: req.user.updatedAt
//       });
//     }
//   });

module.exports = router;
