const Car = require('../models/car')

async function create(req, res) {
  const carId = req.params.id
  const car = await Car.findOne(carId)
  car.reviews.push(req.body)
  try {
    await car.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/car/${car.carId}`)
}

module.exports = { create }
