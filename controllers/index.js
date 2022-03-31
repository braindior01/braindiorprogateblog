class IndexController {
  // Show home page
  static getHomePage(req, res, next) {
    res.render("index");
  }

  // Show dashboard
  // static getDashboardPage(req, res, next) {
  //   res.render("dashboard", {
  //     username: req.user.username,
  //   });
  // }

  // Show dashboard
  static getDashboardPage(req, res, next) {
    res.render("dashboard", {
      // username: req.user.username, -> Need to be updated
      username: req.user.username || req.user.displayName,
    });
  }

}

module.exports = IndexController;