const Car = require('../models/car')

async function create(req, res) {
  const car = await Car.findById(req.params.id)
  car.reviews.push(req.body)
  try {
    await car.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/car/${car._id}`)
}

module.exports = { create }
