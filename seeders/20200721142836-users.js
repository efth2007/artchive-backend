"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const saltRounds = 10;
    return queryInterface.bulkInsert(
      "users",
      [
        {
          userName: "one",
          email: "1@1.com",
          password: bcrypt.hashSync("1111", saltRounds),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "test",
          email: "t@t.com",
          password: bcrypt.hashSync("tttt", saltRounds),
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
