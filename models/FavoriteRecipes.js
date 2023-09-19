const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FavoriteRecipes extends Model {}

FavoriteRecipes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "favorite_recipes",
  }
);

module.exports = FavoriteRecipes;
