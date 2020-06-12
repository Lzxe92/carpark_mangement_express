'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('parking_lot', {
            parking_lot_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            mall_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model:"mall",
                    key:"mall_id"
                },
            },
            name: {
                type: Sequelize.STRING,
                unique:true
            },
            rate: {
                type: Sequelize.DOUBLE
            },
            reservation_hours: {
                type: Sequelize.INTEGER
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
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('parking_lot');
    }
};