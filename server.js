const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
const carRouter = require('./routes/cars')
const daySpellRouter = require('./routes/daySpells')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json)
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT}`)
})
