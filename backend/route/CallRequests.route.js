const Route = require('express')
const route = new Route()
const CallRequests = require('../controller/CallRequests.controller')

route.get('/', CallRequests.findAll)

route.post('/:Name/:Phone/:Equipment/:AvailableCar', CallRequests.createWithUser)

module.exports = route