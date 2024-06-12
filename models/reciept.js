const mongoose = require('mongoose')
const Schema = mongoose.Schema

const receiptSchema = new Schema(
  {
    rid: Number,
    uid: String,
    userName: String,
    rentalDetails: Object, // number of days, and total price
    cid: Number,
    car: { type: Schema.Types.ObjectId, ref: 'Car' } // Reference to the Car model
  },
  { timestamps: true }
)

module.exports = mongoose.model('Receipt', receiptSchema)
