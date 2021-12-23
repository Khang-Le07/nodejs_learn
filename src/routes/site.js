const express = require('express');
const router = express.Router();
const sitecontroller = require('../app/controllers/SiteController');

//newscontroller.index
router.use('/search', sitecontroller.search);
router.use('/', sitecontroller.index);

module.exports = router;
