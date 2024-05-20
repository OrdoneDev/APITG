'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comentario', [
      {
        id_perfil: 1,
        id_publicacao: 1,
        descricao: 'Primeiro Comentario',
        data_publicacao: new Date(),
        cancelado: false
      },
      {
        id_perfil: 2,
        id_publicacao: 2,
        descricao: 'Top',
        data_publicacao: new Date(),
        cancelado: false
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comentario', null, {});
  }
};
