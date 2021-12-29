const express = require('express');
const router = express.Router();
const coursecontroller = require('../app/controllers/CourseController');

//newscontroller.index
router.get('/create', coursecontroller.create);
router.post('/store', coursecontroller.store);
router.get('/:id/edit', coursecontroller.edit);
router.put('/:id', coursecontroller.update);
router.get('/:slug', coursecontroller.show);


module.exports = router;
