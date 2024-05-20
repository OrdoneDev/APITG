'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('amizade', [
      {
        id_perfil: 1,
        id_amigo: 2
      },
      {
        id_perfil: 1,
        id_amigo: 3
      },
      {
        id_perfil: 1,
        id_amigo: 4
      },
      {
        id_perfil: 1,
        id_amigo: 5
      },
      {
        id_perfil: 2,
        id_amigo: 3
      },
      {
        id_perfil: 2,
        id_amigo: 4
      },
      {
        id_perfil: 3,
        id_amigo: 4
      },
      {
        id_perfil: 3,
        id_amigo: 5
      },
      {
        id_perfil: 4,
        id_amigo: 5
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('amizade', null, {});
  }
};
