const mongoose = require('mongoose')
require('dotenv').config()
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
const db = mongoose.connection
module.exports = db
