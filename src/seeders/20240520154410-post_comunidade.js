'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('post_comunidade', [
      {
        id_publicacao: 3,
        id_perfil: 1,
        id_comunidade: 1
      },
      {
        id_publicacao: 4,
        id_perfil: 2,
        id_comunidade: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('post_comunidade', null, {});
  }
};
