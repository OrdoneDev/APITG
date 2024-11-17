"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "arquivopublicacao",
      [
        {
          id_publicacao: 1,
          id_arquivo_compartilhado: 1,
          cancelado: false,
        },
        {
          id_publicacao: 2,
          id_arquivo_compartilhado: 2,
          cancelado: false,
        },
        {
          id_publicacao: 3,
          id_arquivo_compartilhado: 3,
          cancelado: false,
        },
        {
          id_publicacao: 4,
          id_arquivo_compartilhado: 4,
          cancelado: false,
        },
        {
          id_publicacao: 5,
          id_arquivo_compartilhado: 5,
          cancelado: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("arquivopublicacao", null, {});
  },
}
