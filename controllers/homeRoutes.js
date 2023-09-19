// Import necessary dependencies and models
const router = require("express").Router();
const { Recipe, User } = require("../models");
const withAuth = require("../utils/auth");

// Define a route to render the homepage
router.get("/", (req, res) => {
  res.render("homepage"); // Render the "homepage" view
});

// Define a route to render the login page
router.get("/login", (req, res) => {
  res.render("login"); // Render the "login" view
});

// Define a route to render the signup page
router.get("/signup", (req, res) => {
  res.render("signup"); // Render the "signup" view
});

// Export the router for use in other parts of the application
module.exports = router;

