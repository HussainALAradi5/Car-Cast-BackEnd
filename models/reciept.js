const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recieptSchema = new Schema(
  {
    rid: Number,
    uid: String,
    userName: String,
    rentalDetails: Object, //number of days,and total price
    cid: Number,
    carDetails: Object
  },
  { timestamps: true }
)
module.exports = mongoose.model('Reciept', recieptSchema)
