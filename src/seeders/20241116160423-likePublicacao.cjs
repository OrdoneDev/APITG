"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "likepublicacao",
      [
        {
          id_publicacao: 1,
          id_entidade: 2,
        },
        {
          id_publicacao: 2,
          id_entidade: 3,
        },
        {
          id_publicacao: 3,
          id_entidade: 4,
        },
        {
          id_publicacao: 4,
          id_entidade: 5,
        },
        {
          id_publicacao: 5,
          id_entidade: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("likepublicacao", null, {});
  },
};
