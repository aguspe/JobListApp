import {
    addNewJob,
    getCategories,
    addNewCategory,
    getJobs,
    getCategoryJobs,
    getLocations,
    addNewLocation, getLocationAndCategoryJobs, getLocationJobs
} from "../controllers/jobController";

import {addNewUser} from "../controllers/userController";
import {authenticateUser} from "../controllers/authController";

const routes = (app) => {
    app.route('/api/locations')
        .get((req, res, next)=> {
            //middleware
            console.log(`request from ${req.originalUrl}`);
            console.log(`request type ${req.method}`);
            next();
        }, getLocations)

        //POST Endpoint
        .post(addNewLocation);

    app.route('/api/categories')
        .get((req, res, next)=> {
            //middleware
            console.log(`request from ${req.originalUrl}`);
            console.log(`request type ${req.method}`);
            next();
        }, getCategories)

        //POST Endpoint
        .post(addNewCategory);

        app.route('/api/jobs')
        //POST Job
        .post(addNewJob)
        .get(getJobs);

    // app.route('/api/:location')
    // //Get Jobs in a location
    //     .get(getLocationJobs);

    // app.route('/api/:category')
    // //Get Jobs in a category
    //     .get(getCategoryJobs);

    app.route('/api/:location/:category')
    //Get Jobs in location and category
        .get(getLocationAndCategoryJobs);

    app.route('/api/users')
    //Post user
        .post(addNewUser);

    app.route('/api/authenticate')
    //Authenticate
        .post(authenticateUser);

//     app.route('/checkToken')
//         .get(withAuth, checkToken)
};

export default routes;