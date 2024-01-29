const User = require('../module/User')

async function show (req, res) {

    try {
        const foundUser = await User.findById(req.id)

        res.status(200).json({
            username: foundUser.username, 
            email: foundUser.email 
        })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    show
}