'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
            await queryInterface.createTable('DjMusicalgenres', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            dj_id: {
            type: Sequelize.INTEGER,
                references: {
                    model:"djs",
                    key:"id"
                },
            },
            musicalgenre_id: {
                type: Sequelize.INTEGER,
                references: {
                    model:"musicalgenres",
                    key:"id"
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
            
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('DjMusicalgenres');
    }
};
