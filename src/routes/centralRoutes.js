const { Router } = require('express')
const { userRoutes } = require('./user.routes')

const routes = new Router()

routes.use('/pcs', [
    userRoutes()
])

module.exports = routes