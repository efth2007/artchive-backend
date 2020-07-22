"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("artists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      knownAs: {
        type: Sequelize.STRING,
      },
      bornOn: {
        type: Sequelize.INTEGER,
      },
      diedOn: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.STRING,
      },
      placeOfBirth: {
        type: Sequelize.STRING,
      },
      placeOfDeath: {
        type: Sequelize.STRING,
      },
      nationality: {
        type: Sequelize.STRING,
      },
      burialSite: {
        type: Sequelize.STRING,
      },
      painter: {
        type: Sequelize.BOOLEAN,
      },
      sculptor: {
        type: Sequelize.BOOLEAN,
      },
      wikiUrl: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("artists");
  },
};
