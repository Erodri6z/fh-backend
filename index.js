const express = require('express')
const dotenv = require('dotenv')

// Load environment variables from .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT 

app.use(express.json())

// Example route to demonstrate environment variable usage
app.get('/api/message', (req, res) => {
  res.json({ message: process.env.MESSAGE })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})