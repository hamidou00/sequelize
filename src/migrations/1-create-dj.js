'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('djs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      club_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"clubs",
          key:"id"
        },
      },
      url_name: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      biography: {
        type: Sequelize.STRING
      },
      soundcloud: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      spotify: {
        type: Sequelize.STRING
      },
      beatport: {
        type: Sequelize.STRING
      },
      mixcloud: {
        type: Sequelize.STRING
      },
      youtube: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('djs');
  }
};