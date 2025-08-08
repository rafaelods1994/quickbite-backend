'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('OrderItems', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      dishId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'dishes',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('OrderItems');
  }
};
