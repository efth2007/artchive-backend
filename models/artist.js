"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      artist.hasMany(models.artwork);
      artist.belongsToMany(models.tag, {
        through: "artistTags",
        foreignKey: "artistId",
      });
      artist.belongsToMany(models.user, {
        through: "userArtists",
        foreignKey: "artistId",
      });
    }
  }
  artist.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      knownAs: DataTypes.STRING,
      bornOn: DataTypes.INTEGER,
      diedOn: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      placeOfBirth: DataTypes.STRING,
      placeOfDeath: DataTypes.STRING,
      nationality: DataTypes.STRING,
      burialSite: DataTypes.STRING,
      painter: DataTypes.BOOLEAN,
      sculptor: DataTypes.BOOLEAN,
      wikiUrl: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      bio: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "artist",
    }
  );
  return artist;
};
