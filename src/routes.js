const express = require('express')
const UserController = require('./controllers/UserController')
const AdressesController = require('./controllers/AdressesController')
const trilhaController = require('./controllers/trilhaController')

const routes = express.Router()

routes.get('/trilha/:id', trilhaController.selectOne)
routes.get('/trilha', UserController.index)
routes.post('/trilha', UserController.store)
routes.delete('/trilha/:id', UserController.delete)

routes.get('/users/:user_id/adresses', AdressesController.index)
routes.post('/users/:user_id/adresses', AdressesController.store)

module.exports = routes