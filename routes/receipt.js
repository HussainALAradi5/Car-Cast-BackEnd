const express = require('express')
const router = express.Router()
const receiptsCtrl = require("../controllers/receipts")

router.get("/cars/:id/receipts", receiptsCtrl.show)

router.post("/cars/:id/receipts", receiptsCtrl.create)

module.exports = router