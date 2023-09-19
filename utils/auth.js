const auth = (req, res, next) => {
  !req.session.logged_in ? res.redirect("/homepage") : next();
};

module.exports = auth;
