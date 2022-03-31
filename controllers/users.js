const passport = require("passport");

const User = require("../models/users");

class UserController {
  // Show register page
  static getRegisterPage(req, res, next) {
    res.render("register");
  }

  // Handle register request
  static registerUser(req, res, next) {
    User.create(req.con, req.body, () => {
      res.redirect("/");
    })
  }

// Show login page
  static getLoginPage(req, res, next) {
    res.render("login");
  }

  // Handle login request
  static loginUser(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/dashboard",
      failureRedirect: "/users/login",
    })(req, res, next);
  }

  // Handle login request
  static logoutUser(req, res, next) {
    req.logout();
    res.redirect("/");
  }

  // Handle Facebook auth
  static facebookLogin(req, res, next) {
    passport.authenticate("facebook")(req, res, next);
  }

  // Handle Facebook auth response
  static facebookLoginCallback(req, res, next) {
    passport.authenticate('facebook', {
      successRedirect: '/dashboard',
      failureRedirect: '/'
    })(req, res, next);
  }

}

module.exports = UserController;