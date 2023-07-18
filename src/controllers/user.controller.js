const { User } = require('../models/user')
const { sign } = require('jsonwebtoken')
const { Op } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

class userController {
    async createUser(request, response) {
        try {
            const { name, surname, gender, birth_date, cpf, phone, email, password } = request.body;

            if (!name || !surname || !gender || !birth_date || !cpf || !phone || !email || !password) {
                return response.status(400).send({ message: "Fill the inputs!" })
            }


            const eCPF = await User.findOne({ where: { cpf } });
            if (eCPF) {
                return response.status(409).json({ message: 'CPF already registered' });
            }

            const data = await User.create({
                name,
                surname,
                gender,
                birth_date,
                cpf,
                phone,
                email,
                password
            })

            return response.status(201).send(data)
        } catch (error) {
            console.log(error.message)
            return response.status(400).send({ message: "The user could not be created!" })
        }
    }
    async userLogin(request, response) {
        try {
            const { email, password } = request.body

            const validUser = await User.findOne({
                where: {
                    email
                }
            })

            if (!validUser || validUser.password !== password) {
                return response.status(404).send({ message: "It was not able to login, verify if your email or password is correct!" })
            }
            const payload = {
                id: validUser.id,
                email: validUser.email,
                name: validUser.name,
            }

            const token = sign(payload, process.env.SECRET, {
                expiresIn: '1d'
            })

            return response.status(200).send({ token })
        } catch (error) {
            return response.status(401).send({ message: 'Verify if your email or password is correct!' })
            return response.status(401).send({ message: error.message })
        }
    }
    async updateUserData(request, response) {
        try {
            const { id } = request.params
            const { name, surname, gender, phone } = request.body

            const user = await User.findByPk(id)

            if (!user) {
                return response.status(404).send({ message: 'User not found!' })
            }

            if (name) {
                user.name = name
            } if (surname) {
                user.surname = surname
            } if (gender) {
                user.gender = gender
            } if (phone) {
                user.phone = phone
            }

            await user.save()

            return response.status(200).send({ message: 'User data successfuly updated!' })
        } catch (error) {
            console.log(error)
            return response.status(400).send({ message: 'User data could not update!', error })
        }
    }
    async updateUserStatus(request, response) {
        try {
            const { id } = request.params
            const { status } = request.body
            const user = await User.findByPk(id)

            if (!user) {
                return response.status(404).send({ message: 'User not found!' })    
            }

            if (status) {
                user.status = status
            }
            await user.save()

            return response.status(200).send('hahahhha')
        } catch (error) {
            return response.status(400).send({ message: 'User status could not update!', error })
        }
    }
    async updateUserPassword(request, response) {
        try {
            const { id } = request.params
            const { password } = request.body
            const user = await User.findByPk(id)

            if (!user) {
                return response.status(404).send({ message: 'User not found!' })
            }

            if (password) {
                user.password = password
            }
            await user.save()

            return response.status(200).send(user)
        } catch (error) {
            return response.status(400).send({ message: 'User status could not update!', error })
        }
    }
    async listUsersById(request, response) {
        const { id } = request.params
        const data = await User.findByPk(id)

        return response.status(200).send(data)
    }
}


module.exports = new userController()