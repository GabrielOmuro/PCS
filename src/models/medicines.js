const { connection } = require('../database/connection.settings');
const { Deposit } = require('./deposit');
const { User } = require('./user');
const { Sequelize } = require('sequelize')

const Medicine = connection.define('Medicine', {
    deposit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Deposit,
            key: 'id'
        }
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    medicine_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            len: [2, 20]
        }
    },
    lab_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            len: [2, 20]
        }
    },
    dosage: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            len: [2, 20]
        }
    },
    unity_dosage: {
        type: Sequelize.ENUM( 'mg', 'mcg', 'g', 'mL', '%', 'Outro' ),
        allowNull: false,
        defaultValue: 'mg'
    },
    type: {
        type: Sequelize.ENUM( 'controlled medicine', 'non-controlled medicine' ),
        allowNull: false,
        defaultValue: 'controlled medicine'
    },
    unity_price: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            len: [2, 20]
        }
    },
    quantity: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            len: [2, 20]
        }
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 'active'
    },
}, { underscored: true });

Medicine.associate = (models) => {
    Medicine.belongsTo(models.User, {
        foreignKey: 'user_id',
        allowNull: false
    });
};

module.exports = {
    Medicine
};
