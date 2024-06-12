const mongoose = require('mongoose')
const Schema = mangoose.Schema

const reviewSchema = new Schema(
  {
    rid: Number,
    uid: String,
    review: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', reviewSchema)
