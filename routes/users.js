const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");

// Show register page
router.get("/register", UserController.getRegisterPage);

// Register a user
router.post("/register", UserController.registerUser);

// Show login page
router.get("/login", UserController.getLoginPage);

// Login a user
router.post("/login", UserController.loginUser);

// Logout a user
router.get("/logout", UserController.logoutUser);


// Perform Facebook auth
router.get("/facebook-login", UserController.facebookLogin);

// Get Facebook auth response
router.get("/facebook-login/callback", UserController.facebookLoginCallback);

module.exports = router;