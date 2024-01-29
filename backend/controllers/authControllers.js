const User = require ('../models/User')
const bcrypt = require ('bcrypt') 
const jwt = require ('jsonwebtoken')

function generateToken(newUser) {
    const payload = { id: newUser._id, username: newUser.username}
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 300 })
}

async function register ( req, res ) {

    try {
        // First, want to check if the user exists 
        const foundUser = await User.findOne({ username: req.body.username })

        if (foundUser) {
            return res.status(400).json({ error: 'Username already exists' })
        }

        // If username does not exist, then move forward and ecrypt the password 
        const encryptedPass = await bcrypt.hash(req.body.password, 10)

        // Store new user's info into the database 
        const newUser = await User.create({ ...req.body, password: encryptedPass })

        // Generate JWT token and return to the user 
        const token = generateToken(newUser)
        res.status(200).json({ token })

    } catch (err) {
        console.log (err.message)
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    register
}
