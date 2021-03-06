const Course = require('../models/Courses');
const {mongooseToObject} = require('../../util/mongoose')

class CourseController {
    
    show(req, res,next) {
        Course.findOne({slug: req.params.slug})
        .then((course)=>{
            res.render('courses/show',{course: mongooseToObject(course)})
        })
        .catch(next);
    }
    create(req, res, next){
        res.render('courses/create')
    }
    store(req ,res, next){
       const formData = req.body;
       formData.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
       const course = new Course(formData);
       course.save()
        .then(()=> res.redirect('/'))
        .catch(next)
    }
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course : mongooseToObject(course)
            }))
            .catch(next)    
    }
    //[PUT]
    update(req,res,next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(()=>res.redirect('/me/courses'))
            .catch(next)

    }
    //[DELETE]
    destroy(req,res,next){
        Course.delete({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)

    }
    //[PATCH] restore
    restore(req,res,next){
        Course.restore({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)

    }
    harddestroy(req,res,next){
        Course.deleteOne({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)
    }
    //[post]
    handleFromAction(req,res,next){
        switch(req.body.action){
            case 'delete':
                Course.delete({_id: {$in: req.body.coursesid}})
                .then(()=>res.redirect('back'))
                .catch(next)
            break;
            default:
                res.json({message:'Khong hop le'})
        }
    }
}


module.exports = new CourseController();
