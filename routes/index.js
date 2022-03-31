const express = require("express");
const router = express.Router();

const IndexControllers = require("../controllers/");

const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    // Handle if user is not logged in yet
    res.redirect("/users/login");
  }
};

// Go to home page
router.get("/", IndexControllers.getHomePage);

// Go to dashboard
router.get("/dashboard", checkAuthentication, IndexControllers.getDashboardPage);

module.exports = router;