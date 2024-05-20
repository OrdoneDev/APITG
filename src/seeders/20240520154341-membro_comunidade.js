'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('membro_comunidade', [
      {
        id_perfil: 1,
        id_comunidade: 1,
        cargo: 1
      },
      {
        id_perfil: 2,
        id_comunidade: 2,
        cargo: 1
      },
      {
        id_perfil: 3,
        id_comunidade: 1,
        cargo: 3
      },
      {
        id_perfil: 5,
        id_comunidade: 1,
        cargo: 3
      },
      {
        id_perfil: 4,
        id_comunidade: 2,
        cargo: 3
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('membro_comunidade', null, {});
  }
};
