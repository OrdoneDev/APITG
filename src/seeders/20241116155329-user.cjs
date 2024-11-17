"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const entidades = await queryInterface.bulkInsert(
      "entidade",
      [
        {
          nome: "João Silva",
          data_nascimento: "1990-01-01",
          sexo: "M",
          foto: null,
          biografia: "Desenvolvedor de software apaixonado por tecnologia.",
          cancelado: false,
          tipo_entidade: "Entidade",
          data_criacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          nome: "Maria Oliveira",
          data_nascimento: "1985-05-15",
          sexo: "F",
          foto: null,
          biografia: "Designer gráfica e ilustradora.",
          cancelado: false,
          tipo_entidade: "Entidade",
          data_criacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          nome: "Carlos Pereira",
          data_nascimento: "1978-11-23",
          sexo: "M",
          foto: null,
          biografia: "Engenheiro civil com 20 anos de experiência.",
          cancelado: false,
          tipo_entidade: "Entidade",
          data_criacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          nome: "Ana Costa",
          data_nascimento: "1992-07-30",
          sexo: "F",
          foto: null,
          biografia: "Médica especializada em cardiologia.",
          cancelado: false,
          tipo_entidade: "Entidade",
          data_criacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          nome: "Pedro Santos",
          data_nascimento: "1980-03-12",
          sexo: "M",
          foto: null,
          biografia: "Professor de matemática e física.",
          cancelado: false,
          tipo_entidade: "Entidade",
          data_criacao: new Date(),
          data_atualizacao: new Date(),
        },
      ],
      { returning: true }
    );

    // Inserir dados na tabela Login
    await queryInterface.bulkInsert(
      "login",
      [
        {
          id_entidade: 1,
          email: "joao.silva@example.com",
          senha: "senha123",
          ultimo_login: new Date(),
        },
        {
          id_entidade: 2,
          email: "maria.oliveira@example.com",
          senha: "senha123",
          ultimo_login: new Date(),
        },
        {
          id_entidade: 3,
          email: "carlos.pereira@example.com",
          senha: "senha123",
          ultimo_login: new Date(),
        },
        {
          id_entidade: 4,
          email: "ana.costa@example.com",
          senha: "senha123",
          ultimo_login: new Date(),
        },
        {
          id_entidade: 5,
          email: "pedro.santos@example.com",
          senha: "senha123",
          ultimo_login: new Date(),
        },
      ],
      {}
    );

    // Inserir dados na tabela Amizade
    return queryInterface.bulkInsert(
      "amizade",
      [
        {
          id_entidade1: 1,
          id_entidade2: 2,
          status: "pendente",
          data_solicitacao: new Date(),
          data_resposta: null,
        },
        {
          id_entidade1: 2,
          id_entidade2: 3,
          status: "aceito",
          data_solicitacao: new Date(),
          data_resposta: new Date(),
        },
        {
          id_entidade1: 3,
          id_entidade2: 4,
          status: "pendente",
          data_solicitacao: new Date(),
          data_resposta: null,
        },
        {
          id_entidade1: 4,
          id_entidade2: 5,
          status: "aceito",
          data_solicitacao: new Date(),
          data_resposta: new Date(),
        },
        {
          id_entidade1: 5,
          id_entidade2: 1,
          status: "pendente",
          data_solicitacao: new Date(),
          data_resposta: null,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("amizade", null, {});
    await queryInterface.bulkDelete("login", null, {});
    return queryInterface.bulkDelete("entidade", null, {});
  },
};
