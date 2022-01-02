const express = require('express');
const router = express.Router();
const mecontroller = require('../app/controllers/MeController');

//mecontroller.index
router.get('/courses', mecontroller.storedCourses);
router.get('/trashcourses', mecontroller.storedTrashCourses);

module.exports = router;
