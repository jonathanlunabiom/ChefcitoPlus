const User = require('./User');
const FavoriteRecipes = require('./FavoriteRecipes');
const Recipe = require('./Recipe');
const RecipeReviews = require('./RecipeReviews');

User.hasMany(FavoriteRecipes, {
    foreignKey: 'userFavorite_id',
    onDelete: 'CASCADE'
});

FavoriteRecipes.belongsTo(User, {
    foreignKey: 'userFavorite_id',
});

Recipe.hasMany(RecipeReviews, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

RecipeReviews.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
})

User.hasMany(Recipe, {
    foreignKey: 'userRecipe_id',
    onDelete: 'CASCADE'
});

Recipe.belongsTo(User,{
    foreignKey: 'userRecipe_id'
})



module.exports = { User, RecipeReviews, FavoriteRecipes, Recipe };