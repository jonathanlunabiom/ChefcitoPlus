const router = require("express").Router();
const { Recipe, FavoriteRecipes } = require("../models");
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

    for (i = 0; i < recipes.length; i++) {
      if (recipes[i].userRecipe_id === req.session.user_id) {
        recipes[i].flag = true;
      }
    }
    res.render('dashboard', { recipes, logged_in: req.session.logged_in })
  } catch (error) {
    res.status(500).json(error.message)
  }
});

router.get("/newRecipe", withAuth,(req, res) => {
  res.render("newRecipe");
});

router.get("/favorites",withAuth, async (req,res)=>{
  const allFavorites = await FavoriteRecipes.findAll({
    where:{
      userFavorite_id: req.session.user_id
    }
  })
  const favRecipes = allFavorites.map((recipe) => recipe.get({ plain: true }));
  
  res.render("favorites", {
    favRecipes, logged_in: req.session.logged_in
  });
})

module.exports = router;
