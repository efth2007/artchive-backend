"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      location.hasMany(models.artwork);
    }
  }
  location.init(
    {
      name: DataTypes.STRING,
      longitude: DataTypes.DECIMAL,
      latitude: DataTypes.DECIMAL,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "location",
    }
  );
  return location;
};
