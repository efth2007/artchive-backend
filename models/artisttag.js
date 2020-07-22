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
      artist_id: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "artistTag",
    }
  );
  return artistTag;
};
