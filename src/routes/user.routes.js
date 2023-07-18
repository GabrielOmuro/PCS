const { createUser, userLogin, updateUserData, updateUserStatus, updateUserPassword, listUsersById } = require('../controllers/user.controller')
const { Router } = require('express')
const { auth } = require('../middleware/auth')

class userRouter{
    userRoutes(){
        const userRoutes = Router()
        
        userRoutes.post('/User/RegisterUser', createUser)
        userRoutes.post('/User/Login', userLogin)
        userRoutes.patch('/User/UpdateUserData/:id', auth, updateUserData)
        userRoutes.patch('/User/UpdateUserStatus/:id', auth, updateUserStatus)
        userRoutes.patch('/User/UpdateUserPassword/:id/password', auth, updateUserPassword)
        userRoutes.get('/User/ListUserById/:id', auth, listUsersById)
        return userRoutes
    }
}

module.exports = new userRouter()