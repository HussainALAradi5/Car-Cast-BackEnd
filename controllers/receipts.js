const Car = require('../models/car')
const User = require('../models/user')
const {Receipt} = require('../models/receipt')

const show= async (req, res) => {
  const receipt = await Receipt.find({})
  const carId = req.params.id // Use id from request params
  const userId = req.params._id

  try {
    const reciept = await Reciept.findById(req.params.id)
    res.render(`reciept/show`, { title: 'Reciepts Details', reciept })
    const car = await Car.findById(carId)
    const user = await User.findById(userId)
    const rentalDetails = await Car.findOne({ id: rentalDetails.id })
    const carDetails = await Car.findOne({ id: carDetails.id })

    if (car && user) {
      const userName = req.params.userName
      const rentalDetails = req.params.rentalDetails

      console.log(userName, rentalDetails);
    }
  } catch (error) {
    console.error('Error fetching car details:', error)
    res.status(500).send('Error fetching car details')
  }

  }

  module.exports = {
    show,
  }
