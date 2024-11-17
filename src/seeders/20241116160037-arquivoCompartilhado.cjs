"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "arquivocompartilhado",
      [
        {
          id_entidade: 1,
          titulo: "Arquivo de João Silva",
          arquivo: Buffer.from(''),
          descricao: "Descrição do arquivo de João Silva.",
          score_medio: 4.5,
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 2,
          titulo: "Arquivo de Maria Oliveira",
          arquivo: Buffer.from(''),
          descricao: "Descrição do arquivo de Maria Oliveira.",
          score_medio: 4.7,
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 3,
          titulo: "Arquivo de Carlos Pereira",
          arquivo: Buffer.from(''),
          descricao: "Descrição do arquivo de Carlos Pereira.",
          score_medio: 4.8,
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 4,
          titulo: "Arquivo de Ana Costa",
          arquivo: Buffer.from(''),
          descricao: "Descrição do arquivo de Ana Costa.",
          score_medio: 4.6,
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          id_entidade: 5,
          titulo: "Arquivo de Pedro Santos",
          arquivo: Buffer.from(''),
          descricao: "Descrição do arquivo de Pedro Santos.",
          score_medio: 4.9,
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("arquivocompartilhado", null, {});
  },
};
