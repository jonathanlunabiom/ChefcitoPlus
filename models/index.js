const User = require('./User');
const FavoriteRecipes = require('./FavoriteRecipes');
const Recipe = require('./Recipe');
const RecipeReviews = require('./RecipeReviews');

User.hasMany(FavoriteRecipes, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

FavoriteRecipes.belongsTo(User, {
    foreignKey: 'user_id',
});

Recipe.hasMany(RecipeReviews, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

RecipeReviews.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
})



module.exports = { User, RecipeReviews, FavoriteRecipes, Recipe };