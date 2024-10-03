const connectToMongo = require('./db');
var cors = require('cors') 
const express = require('express')


const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Availables Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port at http://localhost:${port}`)
})

connectToMongo();