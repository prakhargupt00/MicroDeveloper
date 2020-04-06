const express = require('express')
const router = express.Router()

const path = '../controllers/microservice'
const getInfo = require(path + '/get-info')
router.post('/', getInfo)

module.exports = router
