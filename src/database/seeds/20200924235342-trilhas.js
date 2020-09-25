'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('trilha', [
      {
        nome: 'chapeu do sol 1',
        coordenadas: '-8.0150676;-34.9465582',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'chapeu do sol 2',
        coordenadas: '-8.007837;-34.945868',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'chapeu do sol 3',
        coordenadas: '-8.007073;-34.951170',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('trilha', null, {});
  }
};
