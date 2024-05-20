'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comunidade', [
      {
        foto: null,
        nome: 'Biologia',
        descricao: 'Bem-vindo à nossa comunidade de Biologia! Aqui, somos apaixonados por todas as coisas que envolvem a vida e seus processos. Nossa missão é criar um espaço onde entusiastas, estudantes e profissionais de biologia possam se reunir para compartilhar ideias, discutir teorias e avanços recentes, e colaborar em projetos. Se você está interessado em genética, ecologia, fisiologia, evolução, ou qualquer outro subcampo da biologia, você encontrará pessoas com mentes semelhantes aqui. Junte-se a nós enquanto exploramos o fascinante mundo da biologia juntos!',
        visibilidade: 1,
        cancelado: false
      },
      {
        foto: null,
        nome: 'English',
        descricao: 'English today',
        visibilidade: 1,
        cancelado: false
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comunidade', null, {});
  }
};
