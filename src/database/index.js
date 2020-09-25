const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../model/User')
const Adresses = require('../model/Adress')

const connection = new Sequelize(dbConfig)

//! iniciando o model
User.init(connection)
Adresses.init(connection)

//! passa os modelos iniciados anteriormente
User.associate(connection.models)
Adresses.associate(connection.models)

module.exports = connection