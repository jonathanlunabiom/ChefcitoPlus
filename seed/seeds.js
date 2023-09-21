const sequelize = require('../config/connection');
const { User, Recipe, FavoriteRecipes } = require('../models');

const userData = require('./Users.json');
const recipeData = require('./Recipes.json');
const favoriteData = require('./favorites.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Recipe.bulkCreate(recipeData)

  await FavoriteRecipes.bulkCreate(favoriteData)

  process.exit(0);
};

seedDatabase();