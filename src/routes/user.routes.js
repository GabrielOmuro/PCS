const { createUser, userLogin, updateUserData, updateUserStatus } = require('../controllers/user.controller')
const { Router } = require('express')
const { auth } = require('../middleware/auth')

class userRouter{
    userRoutes(){
        const userRoutes = Router()
        
        userRoutes.post('/User', createUser)
        userRoutes.post('/User/Login', userLogin)
        userRoutes.patch('/User/UpdateUserData/:id', auth, updateUserData)
        userRoutes.patch('/User/UpdateUserStatus/:id', auth, updateUserStatus)
        return userRoutes
    }
}

module.exports = new userRouter()