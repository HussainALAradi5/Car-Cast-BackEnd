const express = require('express')
const router = express.Router()
const carCtrl = require('../controllers/cars')
router.get('/', carCtrl.index)
router.get('/new', carCtrl.new)
router.post('/new', carCtrl.new)
router.get('/:id', carCtrl.show) //show car by id
router.post('/remove', carCtrl.remove)
router.delete('/:id', carCtrl.remove)
module.exports = router
