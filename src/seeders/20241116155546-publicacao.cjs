"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "publicacao",
      [
        {
          id_entidade: 1,
          descricao: "Primeira publicação de João Silva.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 2,
          descricao: "Primeira publicação de Maria Oliveira.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 3,
          descricao: "Primeira publicação de Carlos Pereira.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 4,
          descricao: "Primeira publicação de Ana Costa.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 5,
          descricao: "Primeira publicação de Pedro Santos.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("publicacao", null, {});
  },
};
