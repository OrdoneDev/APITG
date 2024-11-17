"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "fotopublicacao",
      [
        {
          id_foto: 1,
          id_publicacao: 1,
        },
        {
          id_foto: 2,
          id_publicacao: 2,
        },
        {
          id_foto: 3,
          id_publicacao: 3,
        },
        {
          id_foto: 4,
          id_publicacao: 4,
        },
        {
          id_foto: 5,
          id_publicacao: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("fotopublicacao", null, {});
  },
};
