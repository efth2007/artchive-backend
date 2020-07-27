"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class artwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      artwork.belongsTo(models.artist);
      artwork.belongsTo(models.location);
    }
  }
  artwork.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      medium: DataTypes.STRING,
      date: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      imageUrl: DataTypes.TEXT,
      artistId: {
        type: DataTypes.INTEGER,
        references: { model: "artists", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      locationId: {
        type: DataTypes.INTEGER,
        references: { model: "locations", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {
      sequelize,
      modelName: "artwork",
    }
  );
  return artwork;
};
