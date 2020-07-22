"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          userName: "one",
          email: "1@1.com",
          password: "1111",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "test",
          email: "t@t.com",
          password: "tttt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
