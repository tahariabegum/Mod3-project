const jwt = require ('jsonwebtoken')

function authorize  (req, res, next) {

    try {

        // Check if the request has a JWT token 
        let token = req.header("Authorization")

        if (!token) {
            return res.status(400).json({ error: "No token" })
        }

        token = token.replace("Bearer ", '')

        // Check if token is valid and not expired 

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        if (payload.error) {
            return res.status(400).json({ error: payload.error })
        }

        // Attach the payload from the token to request object 

        req.id = payload.id 
        req.username = payload.username 

        // Next route 

        next()

    } catch (err) {
        console.log(err.message)
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    authorize 
}