const express = require('express')
const router = express.Router()

const path = '../controllers/mapping'
const getAllController = require(path + '/get-all')
const getTemplatesController = require(path + '/get-templates')
const getMappingController = require(path + '/get-mapping')
const updateMappingController = require(path + '/update-mapping')

router.get('/all', getAllController)
router.get('/templates', getTemplatesController)
router.post('/get', getMappingController)
router.post('/update', updateMappingController)
 
module.exports = router
