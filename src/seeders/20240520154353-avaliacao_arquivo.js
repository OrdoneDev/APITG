'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('avaliacao_arquivo', [
      {
        id_perfil: 1,
        id_arquivo_compartilhado: 1,
        descricao: 'Muito bom',
        score: 5,
        data_publicacao: new Date(),
        cancelado: false
      },
      {
        id_perfil: 1,
        id_arquivo_compartilhado: 2,
        descricao: 'Top',
        score: 5,
        data_publicacao: new Date(),
        cancelado: false
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('avaliacao_arquivo', null, {});
  }
};
