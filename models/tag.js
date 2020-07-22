"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tag.belongsToMany(models.artist, {
        through: "artistTags",
        foreignKey: "tag_id",
      });
    }
  }
  tag.init(
    {
      tagName: DataTypes.STRING,
      allowNull: false,
    },
    {
      sequelize,
      modelName: "tag",
    }
  );
  return tag;
};
