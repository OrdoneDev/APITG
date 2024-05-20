'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('publicacao', [
      {
        descricao: 'O segredo da felicidade não é fazer sempre o que se quer, mas querer sempre o que se faz.',
        data_publicacao: new Date(),
        cancelado: false
      },
      {
        descricao: 'As melhores pessoas querem trabalhar os grandes desafios.',
        data_publicacao: new Date(),
        cancelado: false
      },
      {
        descricao: 'Ter uma melhora constante é melhor do que a perfeição adiada.',
        data_publicacao: new Date(),
        cancelado: false
      },
      {
        descricao: 'Comece onde você está, use o que você tem, faça o que você pode.',
        data_publicacao: new Date(),
        cancelado: false
      },
      {
        descricao: 'A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.',
        data_publicacao: new Date(),
        cancelado: false
      },
      {
        descricao: 'Minha mensagem é: para ser insubstituível você deverá ser sempre diferente.',
        data_publicacao: new Date(),
        cancelado: false
      },
      {
        descricao: 'Não busque ser alguém de sucesso, mas alguém de valor.',
        data_publicacao: new Date(),
        cancelado: false
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('publicacao', null, {});
  }
};
