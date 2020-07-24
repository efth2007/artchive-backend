"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class artistTag extends Model {
    static associate(models) {
      artistTag.belongsTo(models.artist);
      artistTag.belongsTo(models.tag);
    }
  }
  artistTag.init(
    {
      artistId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "artistTag",
    }
  );
  return artistTag;
};
