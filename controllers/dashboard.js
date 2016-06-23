/**
 * GET /dashboard
 */
exports.dashboardGet = function(req, res) {
  res.render('dashboard', {
    title: 'Dashboard'
  });
};

exports.ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
};
