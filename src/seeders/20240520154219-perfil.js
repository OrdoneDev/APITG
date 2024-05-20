'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('perfil', [
      {
        nome: 'David Ordone',
        email: 'david9108@hotmail.com',
        senha: 'a1b2c3d4e5',
        data_nascimento: new Date("1994-08-20"),
        sexo: 'M',
        foto: null,
        biografia: 'É preciso liberdade para viver por inteiro',
        autenticacao: null,
        cancelado: false
      },
      {
        nome: 'Ana Dias',
        email: 'anacdias1234@hotmail.com',
        senha: 'a1b2c3d4e5',
        data_nascimento: new Date("1975-06-26"),
        sexo: 'F',
        foto: null,
        biografia: 'Alma grata exala paz',
        autenticacao: null,
        cancelado: false
      },
      {
        nome: 'Edilson Ordone',
        email: 'edilson.ordone@hotmail.com',
        senha: 'a1b2c3d4e5',
        data_nascimento: new Date("1976-03-13"),
        sexo: 'M',
        foto: null,
        biografia: 'Vivendo momentos e construindo lembranças',
        autenticacao: null,
        cancelado: false
      },
      {
        nome: 'Adelaide Dias',
        email: 'adelaide.dias@hotmail.com',
        senha: 'a1b2c3d4e5',
        data_nascimento: new Date("1945-01-06"),
        sexo: 'F',
        foto: null,
        biografia: 'Viver não é esperar a tempestade passar',
        autenticacao: null,
        cancelado: false
      },
      {
        nome: 'João Dias',
        email: 'joao.dias@hotmail.com',
        senha: 'a1b2c3d4e5',
        data_nascimento: new Date("1974-06-26"),
        sexo: 'M',
        foto: null,
        biografia: 'Se nada mudar, mude você',
        autenticacao: null,
        cancelado: false
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('perfil', null, {});
  }
};
