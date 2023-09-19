// Create an Express router instance
const router = require("express").Router();

// Import routes for the dashboard, home, and API
const homeRoutes = require("./homeRoutes");

// Define route handlers for different URL paths
router.use("/", homeRoutes);

// Export the router for use in the application
module.exports = router;
