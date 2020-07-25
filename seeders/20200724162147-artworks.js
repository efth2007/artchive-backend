"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const saltRounds = 10;
    return queryInterface.bulkInsert(
      "artworks",
      [
        {
          title: "Pietà",
          medium: "Marble",
          description:
            "This famous work of art depicts the body of Jesus on the lap of his mother Mary after the Crucifixion. The theme is of Northern origin. Michelangelo's interpretation of the Pietà is unprecedented in Italian sculpture. It is an important work as it balances the Renaissance ideals of classical beauty with naturalism.",
          date: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Michelangelo%27s_Pieta_5450_cut_out_black.jpg",
          artistId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "David",
          medium: "Marble",
          description:
            "David is a 5.17-metre (17.0 ft) marble statue of the Biblical figure David, a favoured subject in the art of Florence. Because of the nature of the figure it represented, the statue soon came to symbolize the defence of civil liberties embodied in the Republic of Florence, an independent city-state threatened on all sides by more powerful rival states and by the hegemony of the Medici family.",
          date: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/a/a0/%27David%27_by_Michelangelo_Fir_JBU002.jpg",
          artistId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Christ in the House of Martha and Mary",
          date: 1655,
          medium: "Oil on canvas",
          description:
            "This is the largest painting by Vermeer and one of the very few with an overt religious motive. The story of Christ visiting the household of the two sisters Mary and Martha goes back to the New Testament. The work has also been called Christ in the House of Mary and Martha (reversing the last two names).",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/4/4f/Johannes_%28Jan%29_Vermeer_-_Christ_in_the_House_of_Martha_and_Mary_-_Google_Art_Project.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Diana and Her Companions",
          date: 1655,
          medium: "Oil on canvas",
          description:
            "The painting's solemn mood is unusual for a scene depicting the goddess Diana, and the nymph washing the central figure's feet has captured the attention of critics and historians, both for her activity and contemporary clothing. Rather than directly illustrating one of the dramatic moments in well-known episodes from myths about Diana, the scene shows a woman and her attendants quietly at her toilette. The theme of a woman in a private, reflective moment would grow stronger in Vermeer's paintings as his career progressed.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Vermeer_-_Diana_and_Her_Companions.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Little Street",
          date: 1657,
          medium: "Oil on canvas",
          description:
            "The painting, showing a quiet street, depicts a typical aspect of the life in a Dutch Golden Age town. It is one of only three Vermeer paintings of views of Delft, the others being View of Delft and the now lost House Standing in Delft. This painting is considered to be an important work of the Dutch master.",
          imageUrl:
            "https://en.wikipedia.org/wiki/The_Little_Street#/media/File:Johannes_Vermeer_-_Gezicht_op_huizen_in_Delft,_bekend_als_'Het_straatje'_-_Google_Art_Project.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Officer and Laughing Girl",
          date: 1657,
          medium: "Oil on canvas",
          description: "",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/2e/Johannes_Vermeer_-_De_Soldaat_en_het_Lachende_Meisje_-_Google_Art_Project.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Milkmaid",
          date: 1657,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "View of Delft",
          date: 1660,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/a/a2/Vermeer-view-of-delft.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Woman Reading a Letter",
          date: 1663,
          medium: "Oil on canvas",
          description:
            "The central element of the painting is a woman in blue standing in front of a window (not depicted) reading a letter. The woman appears to be pregnant, although many have argued that the woman's rounded figure is simply a result of the fashions of the day. Although the woman's loose clothing may be suggestive, pregnancy was very rarely depicted in art during this period.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/db/Vermeer%2C_Johannes_-_Woman_reading_a_letter_-_ca._1662-1663.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Woman with a Lute",
          date: 1664,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/f/fe/Vermeer_-_Woman_with_a_Lute_near_a_window.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Woman with a Pearl Necklace",
          date: 1664,
          medium: "Oil on canvas",
          description:
            "Painted in oils on canvas, Johannes Vermeer portrayed a young Dutch woman, most likely of upper-class-descent, dressing herself with two yellow ribbons, pearl earrings, and a pearl necklace. As a very popular artist of the 17th century, the Dutch Golden Age, Vermeer depicted many women in similar circumstances within interior, domestic scenes. The same woman also appears in The Love Letter and A Lady Writing a Letter",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/8/8d/Jan_Vermeer_van_Delft_-_Young_Woman_with_a_Pearl_Necklace_-_Google_Art_Project.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Girl with a Pearl Earring",
          date: 1665,
          medium: "Oil on canvas",
          description:
            "Going by various names over the centuries, it became known by its present title towards the end of the 20th century after the large pearl earring worn by the girl portrayed there. The work has been in the collection of the Mauritshuis in The Hague since 1902 and has been the subject of various literary treatments. In 2006, the Dutch public selected it as the most beautiful painting in the Netherlands.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Art of Painting",
          date: 1666,
          medium: "Oil on canvas",
          description:
            "This illusionistic painting is one of Vermeer's most famous. In 1868 Thoré-Bürger, known today for his rediscovery of the work of painter Johannes Vermeer, regarded this painting as his most interesting. Svetlana Alpers describes it as 'unique and ambitious'; Walter Liedtke as 'a virtuoso display of the artist's power of invention and execution, staged in an imaginary version of his studio ...' According to Albert Blankert 'No other painting so flawlessly integrates naturalistic technique, brightly illuminated space, and a complexly integrated composition.'",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/5/5e/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Astronomer",
          date: 1668,
          medium: "Oil on canvas",
          description:
            "Portrayals of scientists were a favourite topic in 17th-century Dutch painting and Vermeer's oeuvre includes both this astronomer and the slightly later The Geographer. Both are believed to portray the same man,[2][3][4] possibly Antonie van Leeuwenhoek.[5] A 2017 study indicated that the canvas for the two works came from the same bolt of material, confirming their close relationship.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/0/0e/Johannes_Vermeer_-_The_Astronomer_-_WGA24685.jpg",
          artistId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ginevra de' Benci",
          date: 1474,
          medium: "Oil on canvas",
          description:
            "This oil-on-wood portrait was acquired by the National Gallery of Art in Washington, D.C. in 1967. The sum of US$5 million—an absolute record price at the time—came from the Ailsa Mellon Bruce Fund and was paid to the Princely Family of Liechtenstein. It is the only painting by Leonardo on public view in the Americas.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Leonardo_da_Vinci_-_Ginevra_de%27_Benci_-_Google_Art_Project.jpg/453px-Leonardo_da_Vinci_-_Ginevra_de%27_Benci_-_Google_Art_Project.jpg",
          artistId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Virgin of the Rocks",
          date: 1483,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Leonardo_Da_Vinci_-_Vergine_delle_Rocce_%28Louvre%29.jpg/303px-Leonardo_Da_Vinci_-_Vergine_delle_Rocce_%28Louvre%29.jpg",
          artistId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Virgin and Child with Saint Anne",
          date: 1503,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Leonardo_da_Vinci_-_Virgin_and_Child_with_St_Anne_C2RMF_retouched.jpg/358px-Leonardo_da_Vinci_-_Virgin_and_Child_with_St_Anne_C2RMF_retouched.jpg",
          artistId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mona Lisa",
          date: 1503,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/402px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
          artistId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mona Lisa",
          date: 1503,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/402px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
          artistId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "The Birth of Venus",
          date: 1484,
          medium: "Tempera on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/640px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
          artistId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Primavera (Spring)",
          date: 1475,
          medium: "Tempera on panel",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/640px-Botticelli-primavera.jpg",
          artistId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Venus and Mars",
          date: 1485,
          medium: "Tempera and oil on panel,",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Venus_and_Mars_National_Gallery.jpg/640px-Venus_and_Mars_National_Gallery.jpg",
          artistId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Supper at Emmaus",
          date: 1601,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/1602-3_Caravaggio%2CSupper_at_Emmaus_National_Gallery%2C_London.jpg/640px-1602-3_Caravaggio%2CSupper_at_Emmaus_National_Gallery%2C_London.jpg",
          artistId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Medusa",
          date: 1597,
          medium: "Oil on canvas mounted on wood",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Caravaggio_-_Medusa_-_Google_Art_Project.jpg/468px-Caravaggio_-_Medusa_-_Google_Art_Project.jpg",
          artistId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Death of the Virgin",
          date: 1604,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Michelangelo_Caravaggio_069.jpg/315px-Michelangelo_Caravaggio_069.jpg",
          artistId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Night Watch",
          date: 1642,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/573px-The_Night_Watch_-_HD.jpg",
          artistId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Anatomy Lesson of Dr. Nicolaes Tulp",
          date: 1632,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/637px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
          artistId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Jewish Bride",
          date: 1665,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Rembrandt_Harmensz._van_Rijn_-_Portret_van_een_paar_als_oudtestamentische_figuren%2C_genaamd_%27Het_Joodse_bruidje%27_-_Google_Art_Project.jpg/640px-Rembrandt_Harmensz._van_Rijn_-_Portret_van_een_paar_als_oudtestamentische_figuren%2C_genaamd_%27Het_Joodse_bruidje%27_-_Google_Art_Project.jpg",
          artistId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Las Meninas",
          date: 1656,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/417px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
          artistId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Triumph of Bacchus",
          date: 1628,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Vel%C3%A1zquez_-_El_Triunfo_de_Baco_o_Los_Borrachos_%28Museo_del_Prado%2C_1628-29%29.jpg/640px-Vel%C3%A1zquez_-_El_Triunfo_de_Baco_o_Los_Borrachos_%28Museo_del_Prado%2C_1628-29%29.jpg",
          artistId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Trinity",
          date: 1577,
          medium: "Oil on canvas",
          description: null,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/La_Trinidad_%28El_Greco%2C_1577-1579%29.jpg/277px-La_Trinidad_%28El_Greco%2C_1577-1579%29.jpg",
          artistId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //Template seeds:
        // {
        //   title: "Artwork Title",
        //   date: 1950,
        //   medium: "Oil on canvas",
        //   description: null,
        //   imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgEWY8yZQ2Yje5kzzc_-NMTw2puIqTHdrXcg&usqp=CAU",
        //   artistId: 100,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "",
        //   date: 1,
        //   medium: "",
        //   description: null,
        //   imageUrl: "",
        //   artistId: 23,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("artworks", null, {});
  },
};
