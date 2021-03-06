import {Job, Category, Location} from "../models/jobModel";

export const addNewLocation = (req, res)=> {
    let newLocation = new Location(req.body);

    newLocation.save((err, location)=>{
        if(err){
            res.send(err);
        }
        res.json(location);
    });
};

export const getLocations = (req, res)=>{
    Location.find({},(err, location)=>{
        if(err){
            res.send(err);
        }
        res.json({success: true, data: location});
    });
};

export const addNewCategory = (req, res)=> {
    let newCategory = new Category(req.body);

    newCategory.save((err, category)=>{
        if(err){
            res.send(err);
        }
        res.json(category);
    });
};

export const getCategories = (req, res)=>{
    Category.find({},(err, category)=>{
        if(err){
            res.send(err);
        }
        res.json({success: true, data: category});
    });
};

export const addNewJob = (req, res)=> {
    let newJob = new Job(req.body);

    newJob.save((err, job)=>{
        if(err){
            res.send(err);
        }
        res.json(job);
    });
};

export const getJobs = (req, res)=>{
        Job.find({})
        .populate('category')
        .populate('location')
        .exec()
            .then(job =>res.json(job))
            .catch(err => res.send(err))
};

export const getLocationAndCategoryJobs = (req, res)=>{
    Job.find({category: req.params.category, location: req.params.location},(err, job)=>{
        if(err){
            res.send(err);
        }
        res.json({success: true, data: job});
    });
};
