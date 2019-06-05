const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    title: {type: String, required: true},
    company: {type: String, required: true},
    description: {type: String, required: true},
    location: {type: Schema.Types.ObjectId, ref:'Location'},
    category: {type:Schema.Types.ObjectId, ref: 'Category'}
});

const LocationSchema = new Schema({
    locationName: {type:String},
    namePath : {type:String}
});

const CategorySchema = new Schema({
    categoryName: {type:String},
    namePath : {type:String}
});

export const Job = mongoose.model('Job', JobSchema);
export const Location = mongoose.model('Location', LocationSchema);
export const Category = mongoose.model('Category', CategorySchema);