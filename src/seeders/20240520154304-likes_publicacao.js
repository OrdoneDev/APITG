'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('likes_publicacao', [
      {
        id_publicacao: 1,
        id_perfil: 1
      },
      {
        id_publicacao: 1,
        id_perfil: 2
      },
      {
        id_publicacao: 1,
        id_perfil: 3
      },
      {
        id_publicacao: 1,
        id_perfil: 4
      },
      {
        id_publicacao: 1,
        id_perfil: 5
      },
      {
        id_publicacao: 2,
        id_perfil: 1
      },
      {
        id_publicacao: 3,
        id_perfil: 2
      },
      {
        id_publicacao: 4,
        id_perfil: 3
      },
      {
        id_publicacao: 5,
        id_perfil: 4
      },
      {
        id_publicacao: 6,
        id_perfil: 5
      },
      {
        id_publicacao: 7,
        id_perfil: 3
      },
      {
        id_publicacao: 5,
        id_perfil: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('likes_publicacao', null, {});
  }
};
