'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('arquivo_compartilhado', [
      {
        id_perfil: 1,
        titulo: 'Termo de usabilidade',
        arquivo_compartilhado: 'termo.pdf',
        descricao: 'Termos para utilização da plataforma',
        score_medio: 0,
        data_publicacao: new Date(),
        cancelado: false
      },
      {
        id_perfil: 1,
        titulo: 'PI 6º semestre ADS',
        arquivo_compartilhado: 'PI.pdf',
        descricao: 'Documento referente ao projeto integrado do curso de ADS referente ao 6º semestre',
        score_medio: 0,
        data_publicacao: new Date(),
        cancelado: false
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('arquivo_compartilhado', null, {});
  }
};
