"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const saltRounds = 10;
    return queryInterface.bulkInsert(
      "users",
      [
        {
          userName: "admin",
          email: "a@a.com",
          password: bcrypt.hashSync("aaaa", saltRounds),
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "one",
          email: "1@1.com",
          password: bcrypt.hashSync("1111", saltRounds),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "test",
          email: "t@t.com",
          password: bcrypt.hashSync("tttt", saltRounds),
          isAdmin: false,
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
