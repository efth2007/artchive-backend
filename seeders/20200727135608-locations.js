"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "locations",
      [
        {
          name: "National Gallery",
          longitude: 0.1286594,
          latitude: 51.5088714,
          city: "London",
          country: "United Kingdomy",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_035.JPG/640px-Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_035.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rijksmuseum",
          longitude: 4.885058432455201,
          latitude: 52.359875900000006,
          city: "Amsterdam",
          country: "The Netherlands",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Rijksmuseum_in_Amsterdam.jpg/640px-Rijksmuseum_in_Amsterdam.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mauritshuis",
          longitude: 4.314834042587045,
          latitude: 52.0803787,
          city: "The Hague",
          country: "The Netherlands",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/2010-05-22-den-haag-by-RalfR-48.jpg/640px-2010-05-22-den-haag-by-RalfR-48.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uffizi Galleries",
          longitude: 11.25561,
          latitude: 43.76853,
          city: "Florence",
          country: "Italy",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Florence%2C_Italy_Uffizi_Museum_-_panoramio_%285%29.jpg/640px-Florence%2C_Italy_Uffizi_Museum_-_panoramio_%285%29.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Museo del Prado",
          longitude: -3.692005,
          latitude: 40.413799,
          city: "Madrid",
          country: "Spain",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Madrid-1758045.jpg/640px-Madrid-1758045.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Museum of Modern Art (MoMA)",
          longitude: -73.977499,
          latitude: 40.761612,
          city: "New York, NY",
          country: "United States",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Madrid-1758045.jpg/640px-Madrid-1758045.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Metropolitan Museum of Art",
          longitude: -73.963364,
          latitude: 40.779443,
          city: "New York, NY",
          country: "United States",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Metropolitan_Museum_of_Art_entrance_NYC.JPG/573px-Metropolitan_Museum_of_Art_entrance_NYC.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gemäldegalerie am Kulturforum",
          longitude: 13.364748,
          latitude: 52.508513,
          city: "Berlin",
          country: "Germany",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Berlin_Kulturforum_2002a.jpg/640px-Berlin_Kulturforum_2002a.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "National Gallery of Art",
          longitude: -77.019883,
          latitude: 38.891294,
          city: "Washington D.C.",
          country: "United States",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Washington_October_2016-12.jpg/640px-Washington_October_2016-12.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Musée du Louvre",
          longitude: 2.338027,
          latitude: 48.861147,
          city: "Paris",
          country: "France",
          imageUrl:
            "https://www.museumnext.com/wp-content/uploads/2019/01/louvre.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kunsthistorisches Museum",
          longitude: 16.361781,
          latitude: 48.203739,
          city: "Vienna",
          country: "Austria",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Maria-Theresien-Platz_Kunsthistorisches_Museum_Wien_2010.jpg/640px-Maria-Theresien-Platz_Kunsthistorisches_Museum_Wien_2010.jpg",
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
