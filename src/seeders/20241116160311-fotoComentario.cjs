"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "fotocomentario",
      [
        {
          id_foto: 1,
          id_comentario: 1,
        },
        {
          id_foto: 2,
          id_comentario: 2,
        },
        {
          id_foto: 3,
          id_comentario: 3,
        },
        {
          id_foto: 4,
          id_comentario: 4,
        },
        {
          id_foto: 5,
          id_comentario: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("fotocomentario", null, {});
  },
};
