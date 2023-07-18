const { connection } = require('../database/connection.settings');
const { User } = require('./user');
const { Sequelize } = require('sequelize')

const Deposit = connection.define('Deposit', {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id'
    }
  },
  corporate_name: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      len: [2, 20]
    }
  },
  cnpj: {
    type: Sequelize.STRING(14),
    allowNull: false,
    validate: {
      len: [0, 14]
    }
  },
  trading_name: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      len: [2, 20]
    }
  },
  email: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      len: [2, 20]
    }
  },
  phone: {
    type: Sequelize.STRING(20),
    allowNull: true,
    validate: {
      len: [2, 20]
    }
  },
  cellphone: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      len: [2, 20]
    }
  },
  cep: {
    type: Sequelize.STRING(8),
    allowNull: false,
    validate: {
      len: [0, 8]
    }
  },
  log: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      len: [2, 20]
    }
  },
  number: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      len: [2, 20]
    }
  },
  town: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      len: [2, 20]
    }
  },
  city: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      len: [2, 20]
    }
  },
  state: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      len: [2, 20]
    }
  },
  complement: {
    type: Sequelize.STRING(20),
    allowNull: true,
    validate: {
      len: [2, 20]
    }
  },
  latitude: {
    type: Sequelize.STRING(20),
    allowNull: true,
    validate: {
      len: [2, 20]
    }
  },
  longitude: {
    type: Sequelize.STRING(20),
    allowNull: true,
    validate: {
      len: [2, 20]
    }
  },
  status: {
    type: Sequelize.ENUM( 'active', 'inactive'),
    allowNull: false,
    defaultValue: 'active'
  },
});

Deposit.associate = (models) => {
  Deposit.belongsTo(models.User, {
    foreignKey: 'user_id',
    allowNull: false
  });
  Deposit.hasMany(models.Medicine, {
    foreignKey: 'deposit_id',
    allowNull: false
  });
};

module.exports = {
  Deposit
};
