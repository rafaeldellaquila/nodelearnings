const express = require('express')
const route = express.Router()
const home = require('./src/controllers/homeController.js')
const contact = require('./src/controllers/contactController.js')

function middleware(req, res, next) {
  console.log('MiddleWare')
  next()
}
// 'home' route
route.get('/', middleware, home.renderForm)
route.post('/', home.postSubmit)

// 'contacts' route
route.get('/contact', contact.contact)

module.exports = route

// mongodb+srv://dellaquila:<password>@cluster.g6zihjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster
