const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const userData = require('./Users.json');
const recipeData = require('./Recipes.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Recipe.bulkCreate(recipeData)

  process.exit(0);
};

seedDatabase();