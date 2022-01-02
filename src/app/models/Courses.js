const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);
const Course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    slug:{type:String, slug: 'name', unique: true},
    level:{type:String},
    videoid:{type:String},
},{
    timestamps: true,
});
Course.plugin(mongooseDelete, {
    deletedAt : true ,
    overrideMethods: 'all'
});
module.exports = mongoose.model('Course', Course);
