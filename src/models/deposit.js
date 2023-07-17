const { connection } = require('../database/connection.settings')

const Deposit = connection.define('Deposit', {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: {tableName: "users"},
      key: "id"
    }
  },
  corporate_name: {
    type: VARCHAR(20),
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  cnpj: {
    type: VARCHAR(20),
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  trading_name: {
    type: VARCHAR(20),
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  email: {
    type: VARCHAR(20),
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  phone: {
    type: VARCHAR(20),
    allowNull: true,
    validate: {
      len: [2, 20],
    },
  },
  cellphone: {
    type: VARCHAR(20),
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  cep: {
    type: VARCHAR(20),
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  log: {
    type: VARCHAR(20),
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  number: {
    type: VARCHAR(20),
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },

  town: {
    type: VARCHAR(20),
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  city: {
    type: VARCHAR(20),
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  state: {
    type: VARCHAR(20),
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  complement: {
    type: VARCHAR(20),
    allowNull: true,
    validate: {
      len: [2, 20],
    },
  },
  latitude: {
    type: VARCHAR(20),
    allowNull: true,
    validate: {
      len: [2, 20],
    },
  },
  longitude: {
    type: VARCHAR(20),
    allowNull: true,
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

Deposit.associate = (models) => {
  Deposit.belongsTo(models.User, {
    foreignKey: 'user_id',
    allowNull: false
  });
  Deposit.hasMany(models.Medicines, {
    foreignKey: 'deposit_id',
    allowNull: false
  });
};
module.exports = {
  Deposit
}