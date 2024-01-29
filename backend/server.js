const express = require ('express')
const cors = require ('cors')

require ('dotenv').config() 

const mongoConfig = require('./config')
mongoConfig()

const app = express()

const PORT = 8080 

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})