require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./db')

connectDb()

const app = express()

app.use(cors())
app.use(express.json({ extended: false }))

app.use('/notes', require('./routes/notes'))
app.use('/bin', require('./routes/bin'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server Connected. Running on port ${PORT}`))
