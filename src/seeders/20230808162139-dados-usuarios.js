'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'David Ordone',
        foto: null,
        email: 'david.ordone.dev@gmail.com',
        senha: '123',
        autenticacao: 'developer',
        simulados_realizados: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Dias',
        foto: null,
        email: 'anacdias1234@gmail.com',
        senha: '123',
        autenticacao: 'revisora',
        simulados_realizados: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
