const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection.settings');

const User = connection.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  gender: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [11, 11],
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 255],
      // isStrongPassword: true,
    },
  },
  status: {
    type: DataTypes.ENUM( 'active', 'inactive'),
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
