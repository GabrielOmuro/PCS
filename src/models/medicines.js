const { connection } = require('../database/connection.settings')

const Medicine = connection.define('Medicine', {
    deposit_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: {tableName: "deposits"},
            key: "id"
        }
    },
    user_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: {tableName: "users"},
            key: "id"
        }
    },
    medicine_name: {
        type: VARCHAR(20),
        allowNull: false,
        validate: {
            len: [2, 20],
        },
    },
    lab_name: {
        type: VARCHAR(20),
        allowNull: false,
        validate: {
            len: [2, 20],
        },
    },
    lab_name: {
        type: VARCHAR(20),
        allowNull: false,
        validate: {
            len: [2, 20],
        },
    },
    dosage: {
        type: VARCHAR(20),
        allowNull: false,
        validate: {
            len: [2, 20],
        },
    },
    unity_dosage: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: 'mg',
    },
    type: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: 'controlled medicine',
    },
    unity_price: {
        type: VARCHAR(20),
        allowNull: false,
        validate: {
            len: [2, 20],
        },
    },
    quantity: {
        type: VARCHAR(20),
        allowNull: false,
        validate: {
            len: [2, 20],
        },
    },
    status: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: 'active',
    },
},
    { underscored: true, paranoid: true  });

Medicine.associate = (models) => {
    Medicine.belongsTo(models.Deposit, {
        foreignKey: 'deposit_id',
        allowNull: false
    });
    Medicine.belongsTo(models.User, {
        foreignKey: 'user_id',
        allowNull: false
    });
};
module.exports = {
    Medicine
}