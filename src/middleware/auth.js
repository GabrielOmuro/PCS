const { config } = require('dotenv')
const { verify } = require('jsonwebtoken')
config()


async function auth(request, response, next){
    try {
        console.log("We are in the middleware")
        const { authorization } = request.headers
        console.log(authorization)
        request["payload"] = verify(authorization, process.env.SECRET)
        console.log(request)
        next()
    } catch (error) {
        return response.status(401).send({
            message: "Authentication has failed!",
            cause: error.message})
    }
}

module.exports = { auth }