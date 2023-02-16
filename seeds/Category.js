const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    //Columns defined here//
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      PRIMARYkey: true,
      autoIncrement: true,
  },
  categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

