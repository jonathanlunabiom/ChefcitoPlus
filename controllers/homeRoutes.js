const router = require("express").Router();
const Recipe = require("../models/Recipe");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      order: [['recipe_name', 'ASC']]
    })

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render('dashboard', { recipes })
  } catch (error) {
    res.status(500).json(error.message)
  }
});

router.get("/newRecipe", (req, res) => {
  res.render("newRecipe");
});

module.exports = router;
