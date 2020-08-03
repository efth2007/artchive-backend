"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tags",
      [
        {
          tagName: "Prehistoric Art",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Ancient Art",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Medieval Art",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Renaissance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Mannerism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Baroque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Neoclassicism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Romanticism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Realism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Art Nouveau",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Impressionism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Post-Impressionism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Fauvism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Expressionism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Cubism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Surrealism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Abstract Expressionism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Op Art",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Pop Art",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Arte Povera",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Minimalism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Conceptual Art",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Contemporary Art",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Modern Art",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Street art",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Feminist art",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Postmodernism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tags", null, {});
  },
};
