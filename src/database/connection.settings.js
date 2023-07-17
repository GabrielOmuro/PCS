const { Sequelize } = require('sequelize')
const databaseSettings = require('../settings/database.settings')

const connection = new Sequelize(databaseSettings)

module.exports = { connection }