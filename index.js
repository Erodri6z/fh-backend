const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

// Load environment variables from .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT 

app.use(cors())
app.use(express.json())

// Example route to demonstrate environment variable usage
app.get('/api/message', (req, res) => {
  res.json({ message: process.env.MESSAGE })
})

app.get('/api/serviceId', (req, res) => {
  res.json({serviceId: process.env.SERVICE_ID})
})

app.get('/api/templateId', (req, res) => {
  res.json({templateId: process.env.TEMPLATE_ID})
})

app.get('/api/publicKey', (req, res) => {
  res.json({publicKey: process.env.PUBLIC_KEY})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})