"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userArtist extends Model {
    static associate(models) {
      userArtist.belongsTo(models.user);
      userArtist.belongsTo(models.artist);
    }
  }
  userArtist.init(
    {
      user_id: DataTypes.INTEGER,
      artist_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userArtist",
    }
  );
  return userArtist;
};
