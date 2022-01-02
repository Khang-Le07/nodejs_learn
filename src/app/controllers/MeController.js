const Course = require('../models/Courses');
const {mutipleMongooseToObject}= require('../../util/mongoose')
class MeController {
    //
    
    // GET /news
    storedCourses(req, res, next) {
        Promise.all([Course.find({}),Course.countDocumentsDeleted()])
            .then(([courses, deletedcount])=>res.render('me/stored-courses', {
                deletedcount,
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
        
    }
    storedTrashCourses(req,res,next){
        Course.findDeleted({})
            .then(courses => {
                res.render('me/deleted-courses', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
 
}
module.exports = new MeController();
