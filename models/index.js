const User = require('./User');
const RecipeReviews = require('./RecipeReviews');
const FavoriteRecipes = require('./FavoriteRecipes');

User.hasMany(FavoriteRecipes, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

FavoriteRecipes.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, RecipeReviews, FavoriteRecipes };