"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "userArtists",
      [
        {
          userId: 1,
          artistId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          artistId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          artistId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          artistId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          artistId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          artistId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          artistId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 1,
          artistId: 89,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 2,
          artistId: 101,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          artistId: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          artistId: 108,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          artistId: 92,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          artistId: 99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          artistId: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          artistId: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          artistId: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          artistId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("userArtists", null, {});
  },
};
