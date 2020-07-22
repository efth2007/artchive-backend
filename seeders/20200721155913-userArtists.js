"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "userArtists",
      [
        {
          user_id: 1,
          artist_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          artist_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          artist_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          artist_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          artist_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          artist_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          artist_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          user_id: 1,
          artist_id: 89,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          user_id: 2,
          artist_id: 101,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          artist_id: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          artist_id: 108,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          artist_id: 92,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          artist_id: 99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          artist_id: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          artist_id: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          artist_id: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          artist_id: 20,
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
