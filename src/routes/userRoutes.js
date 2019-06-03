import {
    addNewUser,
} from "../controllers/userController";

const routes = (app) => {
    app.route('/api/users')
    //POST user
        .post(addNewUser())
};

export default routes;