const mongoose = require('mongoose')
const Schema = mongoose.Schema
const carSchema = new Schema(
  {
    id: Number,
    make: String,
    model: String,
    year: Number,
    color: String,
    mileage: Number,
    price: Number,
    fuelType: String,
    transmission: String,
    engine: String,
    horsePower: String,
    Image: String
  },
  { timestamps: true }
)
module.exports = mongoose.model('Car', carSchema)
