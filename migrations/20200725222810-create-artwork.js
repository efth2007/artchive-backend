"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("artworks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      medium: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      imageUrl: {
        type: Sequelize.TEXT,
      },
      artistId: {
        type: Sequelize.INTEGER,
        references: { model: "artists", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      locationId: {
        type: Sequelize.INTEGER,
        references: { model: "locations", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
    await queryInterface.dropTable("artworks");
  },
};
