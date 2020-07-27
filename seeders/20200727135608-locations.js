"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "locations",
      [
        {
          name: "National Gallery",
          longitude: -0.08921,
          latitude: 51.441231,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rijksmuseum",
          longitude: 4.885219,
          latitude: 52.359997,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mauritshuis",
          longitude: 4.59093,
          latitude: 51.95388,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uffizi Galleries",
          longitude: 11.25561,
          latitude: 43.76853,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Museo del Prado",
          longitude: -3.692005,
          latitude: 40.413799,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Museum of Modern Art (New York)",
          longitude: -73.977499,
          latitude: 40.761612,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Metropolitan Museum of Art",
          longitude: -73.963364,
          latitude: 40.779443,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gemäldegalerie am Kulturforum",
          longitude: 13.364748,
          latitude: 52.508513,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "National Gallery of Art (Washington DC)",
          longitude: -77.019883,
          latitude: 38.891294,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Musée du Louvre",
          longitude: 2.338027,
          latitude: 48.861147,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kunsthistorisches Museum",
          longitude: 16.361781,
          latitude: 48.203739,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("locations", null, {});
  },
};
