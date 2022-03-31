const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    // Handle if user is not logged in yet
    res.redirect("/users/login");
  }
};

module.exports = checkAuthentication;