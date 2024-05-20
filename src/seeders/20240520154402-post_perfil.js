'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('post_perfil', [
      {
        id_publicacao: 1,
        id_perfil: 1
      },
      {
        id_publicacao: 2,
        id_perfil: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('post_perfil', null, {});
  }
};
