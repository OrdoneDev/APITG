'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('arquivo_publicacao', [
      {
        id_publicacao: 1,
        id_arquivo_compartilhado: 1,
        cancelado: false
      },
      {
        id_publicacao: 2,
        id_arquivo_compartilhado: 2,
        cancelado: false
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('arquivo_publicacao', null, {});
  }
};
