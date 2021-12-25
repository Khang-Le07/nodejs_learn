const express = require('express');
const router = express.Router();
const coursecontroller = require('../app/controllers/CourseController');

//newscontroller.index
router.get('/:slug', coursecontroller.show);


module.exports = router;
