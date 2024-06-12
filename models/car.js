const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    rid: Number,
    uid: String,
    review: String
  },
  { timestamps: true }
)

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
    image: String
  },
  { timestamps: true }
)
module.exports = mongoose.model('Car', carSchema)
