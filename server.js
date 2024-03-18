require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.DB_STRING).then(() => app.emit('ready'))

app.use(
  express.urlencoded({ extended: true }),
  routes,
  express.static('./public')
)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// start server
app.on('ready', () => {
  app.listen(3000, () =>
    console.info(
      `Server listening on port ${process.env.PORT}. Access: http://localhost:${process.env.PORT}`
    )
  )
})
