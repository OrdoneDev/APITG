"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "comentario",
      [
        {
          id_entidade: 2,
          id_publicacao: 1,
          descricao: "Comentário de Maria Oliveira na publicação de João Silva.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 3,
          id_publicacao: 2,
          descricao:
            "Comentário de Carlos Pereira na publicação de Maria Oliveira.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 4,
          id_publicacao: 3,
          descricao: "Comentário de Ana Costa na publicação de Carlos Pereira.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 5,
          id_publicacao: 4,
          descricao: "Comentário de Pedro Santos na publicação de Ana Costa.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 1,
          id_publicacao: 5,
          descricao: "Comentário de João Silva na publicação de Pedro Santos.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("comentario", null, {});
  },
};
