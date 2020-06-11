'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservation', {
      reservation_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parking_lot_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"parking_lot",
          key:"parking_lot_id"
        },
      },
      car_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"car",
          key:"car_id"
        },
      },
      start_datetime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      end_datetime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE,
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
    return queryInterface.dropTable('reservation');
  }
};