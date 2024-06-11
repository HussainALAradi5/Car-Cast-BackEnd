const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const carRouter = require('./routes/cars')
const daySpellRouter = require('./routes/daySpells')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const PORT = process.env.PORT || 3000
const db = require('./db')
const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json)
app.use(express.urlencoded({ extended: false }))

/* app.use('/cars', carRouter)
app.use('/daySpells', daySpellRouter)
app.use('/users', userRouter) */
app.use('/', indexRouter)

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT}`)
})
