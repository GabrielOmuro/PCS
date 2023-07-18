const { Sequelize } = require('sequelize');
const { connection } = require('../database/connection.settings');

const User = connection.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  gender: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  birth_date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [11, 11],
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [8, 255],
      // isStrongPassword: true,
    },
  },
  status: {
    type: Sequelize.ENUM( 'active', 'inactive'),
    allowNull: false,
    defaultValue: 'active',
  },
}, { underscored: true, paranoid: true });

User.associate = (models) => {
  User.hasMany(models.Deposit, {
    foreignKey: 'user_id',
    allowNull: false,
  });
  User.hasMany(models.Medicines, {
    foreignKey: 'user_id',
    allowNull: false,
  });
};

module.exports = {
  User,
};
