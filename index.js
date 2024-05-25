const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(bodyParser.json());

app.get('/emailjs-config', async (req, res) => {
  res.json({
    serviceId: process.env.SERVICE_ID,
    templateId: process.env.TEMPLATE_ID,
    userId: process.env.PUBLIC_KEY,
  })
})

app.post('/send-email', async (req, res) => {
  const { serviceId, templateId, userId, templateParams } = req.body;

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: templateParams,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})