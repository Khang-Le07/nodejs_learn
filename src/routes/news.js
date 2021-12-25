const express = require('express');
const router = express.Router();
const newscontroller = require('../app/controllers/NewsController');

//newscontroller.index
router.get('/:slug', newscontroller.show);
router.get('/', newscontroller.index);

module.exports = router;
