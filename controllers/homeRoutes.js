// Import necessary dependencies and models
const router = require("express").Router();

// Import the Recipe, User model for database interaction
const { Recipe, User } = require("../models");

// Import the 'withAuth' middleware for authentication
const withAuth = require("../utils/auth");

// Define a route to render the homepage
router.get("/", (req, res) => {
  res.render("homepage"); // Render the "homepage" view
});

// Define a route to render the login page
router.get("/login", (req, res) => {
  res.render("login"); // Render the "login" view
});

// Route: Get the signup page, redirect to homepage if user is already logged in
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    // If the user is already logged in, redirect to the homepage
    res.redirect("/");
    return;
  }

  // Render the "signup" view
  res.render("signup");
});

// Export the router for use in other parts of the application
module.exports = router;

