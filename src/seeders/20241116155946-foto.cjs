"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "foto",
      [
        {
          foto: Buffer.from(''),
          descricao: "Foto de João Silva.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          foto: Buffer.from(''),
          descricao: "Foto de Maria Oliveira.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          foto: Buffer.from(''),
          descricao: "Foto de Carlos Pereira.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          foto: Buffer.from(''),
          descricao: "Foto de Ana Costa.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          foto: Buffer.from(''),
          descricao: "Foto de Pedro Santos.",
          cancelado: false,
          data_publicacao: new Date(),
          data_atualizacao: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("foto", null, {});
  },
};
