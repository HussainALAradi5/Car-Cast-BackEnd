const Car = require('../models/car')

async function create(req, res) {
  const carId = req.parms.id
  const car = await Car.findOne({ id: carId })
  car.reviews.push(req.body)
  try {
    await car.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/car/${carId}`)
}

module.exports = { create }
