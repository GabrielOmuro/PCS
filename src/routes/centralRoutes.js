const { Router } = require('express')
const { userRoutes } = require('./user.routes')
const { depositRoutes } = require('./deposit.routes')
const { medicineRoutes } = require('./medicine.routes')

const routes = new Router()

routes.use('/pcs', [
    userRoutes(),
    depositRoutes(),
    medicineRoutes()
])

module.exports = routes