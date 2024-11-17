"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "avaliacaoarquivo",
      [
        {
          id_entidade: 2,
          id_arquivo_compartilhado: 1,
          descricao: "Avaliação de Maria Oliveira no arquivo de João Silva.",
          score: 5,
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 3,
          id_arquivo_compartilhado: 2,
          descricao: "Avaliação de Carlos Pereira no arquivo de Maria Oliveira.",
          score: 4,
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 4,
          id_arquivo_compartilhado: 3,
          descricao: "Avaliação de Ana Costa no arquivo de Carlos Pereira.",
          score: 5,
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 5,
          id_arquivo_compartilhado: 4,
          descricao: "Avaliação de Pedro Santos no arquivo de Ana Costa.",
          score: 4,
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 1,
          id_arquivo_compartilhado: 5,
          descricao: "Avaliação de João Silva no arquivo de Pedro Santos.",
          score: 5,
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("avaliacaoarquivo", null, {});
  },
};
