const { createDeposit, updateDepositData, updateDepositStatus, listDeposit, listDepositById, deleteDeposit } = require('../controllers/deposit.controller')
const { Router } = require('express')
const { auth } = require('../middleware/auth')

class depositRouter{
    depositRoutes(){
        const depositRoutes = Router()
        depositRoutes.post('/Deposit/CreateDeposit', auth, createDeposit)
        depositRoutes.patch('/Deposit/UpdateDepositData/:id', auth, updateDepositData)
        depositRoutes.patch('/Deposit/UpdateDepositStatus/:id', auth, updateDepositStatus)
        depositRoutes.get('/Deposit/listDeposits', auth, listDeposit )
        depositRoutes.get('/Deposit/listDepositById/:id', auth, listDepositById)
        depositRoutes.delete('/Deposit/deleteDeposit/:id', auth, deleteDeposit)
        return depositRoutes
    }
}

module.exports = new depositRouter()