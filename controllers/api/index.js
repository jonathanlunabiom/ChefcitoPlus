const router = require("express").Router();
const recipeRoutes = require("./recipeRoutes");
const userRoutes = require("./userRoutes");

router.use("/user", userRoutes);
router.use("/recipe", recipeRoutes);

module.exports = router;
