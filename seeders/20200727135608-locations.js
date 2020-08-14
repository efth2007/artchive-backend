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
          country: "United Kingdom",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_035.JPG/640px-Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_035.JPG",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          website: "https://www.nationalgallery.org.uk/",
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
          description:
            "The Rijksmuseum is a Dutch national museum dedicated to arts and history in Amsterdam. The current main building was designed by Pierre Cuypers and first opened in 1885. On 13 April 2013, after a ten-year renovation, the main building was reopened by Queen Beatrix. In 2013 and 2014, it was the most visited museum in the Netherlands. It is also the largest art museum in the country. The museum has on display 8,000 objects of art and history, from their total collection of 1 million objects from the years 1200–2000, among which are some masterpieces by Rembrandt, Frans Hals, and Johannes Vermeer. The museum also has a small Asian collection, which is on display in the Asian pavilion.",
          website: "https://www.rijksmuseum.nl/",
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
          description:
            "The Mauritshuis museum houses the Royal Cabinet of Paintings which consists of 854 objects, mostly Dutch Golden Age paintings. The collections contains works by Johannes Vermeer, Rembrandt van Rijn, Jan Steen, Paulus Potter, Frans Hals, Jacob van Ruisdael, Hans Holbein the Younger, and others. Originally, the 17th century building was the residence of count John Maurice of Nassau. It is now the property of the government of the Netherlands and is listed in the top 100 Dutch heritage sites.",
          website: "https://www.mauritshuis.nl/en/",
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
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          website: "https://www.uffizi.it/en/the-uffizi",
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
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          website: "https://www.museodelprado.es/en",
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
            "https://static.dezeen.com/uploads/2016/04/moma-expansion-diller-scofidio-renfro-new-york-usa_dezeen_1568_0.jpg",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          website: "",
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
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          website: "https://www.moma.org/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gemäldegalerie am Kulturforum",
          latitude: 52.508513,
          longitude: 13.364748,
          city: "Berlin",
          country: "Germany",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Berlin_Kulturforum_2002a.jpg/640px-Berlin_Kulturforum_2002a.jpg",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          website:
            "https://www.smb.museum/en/museums-institutions/gemaeldegalerie/home/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "National Gallery of Art",
          latitude: 38.891294,
          longitude: -77.019883,
          city: "Washington D.C.",
          country: "United States",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Washington_October_2016-12.jpg/640px-Washington_October_2016-12.jpg",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          website: "https://www.nga.gov/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Musée du Louvre",
          latitude: 48.861147,
          longitude: 2.338027,
          city: "Paris",
          country: "France",
          imageUrl:
            "https://www.museumnext.com/wp-content/uploads/2019/01/louvre.jpg",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          website: "https://www.louvre.fr/en",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kunsthistorisches Museum",
          latitude: 48.203739,
          longitude: 16.361781,
          city: "Vienna",
          country: "Austria",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Maria-Theresien-Platz_Kunsthistorisches_Museum_Wien_2010.jpg/640px-Maria-Theresien-Platz_Kunsthistorisches_Museum_Wien_2010.jpg",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          website: "https://www.khm.at/en/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Musée d'Orsay",
          latitude: 48.863682,
          longitude: 2.31653,
          city: "Paris",
          country: "France",
          imageUrl:
            "https://media.timeout.com/images/105581784/630/472/image.jpg",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          website: "https://www.musee-orsay.fr/en/",
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
