'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /*await queryInterface.bulkInsert('foto_comentario', [
      {

      },
      {

      }
    ], {});*/
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foto_comentario', null, {});
  }
};
