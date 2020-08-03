"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    static associate(models) {
      tag.belongsToMany(models.artist, {
        through: "artistTags",
        foreignKey: "tagId",
      });
    }
  }
  tag.init(
    {
      tagName: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "tag",
    }
  );
  return tag;
};
