'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /*await queryInterface.bulkInsert('foto_publicacao', [
      {

      },
      {

      }
    ], {});*/
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foto_publicacao', null, {});
  }
};
