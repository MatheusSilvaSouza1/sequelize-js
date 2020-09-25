'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('caracteristicas', [
      {
        capacidade: 20,
        dificuldade: 'dificil',
        regularidade: 'regular',
        comprimento: 40,
        largura: 10,
        status: 'ativo',
        created_at: new Date(),
        trilha_id: 1
      },
      {
        capacidade: 40,
        dificuldade: 'dificil',
        regularidade: 'regular',
        comprimento: 40,
        largura: 10,
        status: 'ativo',
        created_at: new Date(),
        trilha_id: 2
      },
      {
        capacidade: 50,
        dificuldade: 'dificil',
        regularidade: 'regular',
        comprimento: 40,
        largura: 10,
        status: 'ativo',
        created_at: new Date(),
        trilha_id: 3
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('caracteristicas', null, {});
  }
};
