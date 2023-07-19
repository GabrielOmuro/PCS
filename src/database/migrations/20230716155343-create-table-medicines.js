'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medicines', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      deposit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {tableName: "deposits"},
          key: "id"
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {tableName: "users"},
          key: "id"
        }
      },
      medicine_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lab_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      dosage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      unity_dosage: {
        type: Sequelize.ENUM( 'mg', 'mcg', 'g', 'mL', '%', 'Outro' ),
        defaultValue: 'mg',
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM( 'controlled medicine', 'non-controlled medicine' ),
        defaultValue: 'controlled medicine',
        allowNull: false
      },
      unity_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      quantity: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM( 'active', 'inactive'),
        defaultValue: 'active',
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
