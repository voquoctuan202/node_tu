const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

// newsController.index


router.use('/search', siteController.search)
router.use('/',siteController.home)
module.exports = router;