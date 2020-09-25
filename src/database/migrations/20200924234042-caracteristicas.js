'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('caracteristicas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      trilha_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //! cria uma referencia com users
        references: { model: 'trilha', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      capacidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dificuldade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      regularidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comprimento: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      largura: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('caracteristicas');
  }
};
