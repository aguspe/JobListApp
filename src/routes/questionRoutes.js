import {addNewQuestion,
        getQuestions,
        getQuestionWithId,
        updateQuestion,
        deleteQuestion} from "../controllers/questionsController";

const routes = (app) => {
    app.route('/questions')
        .get((req, res, next)=> {
            //middleware
            console.log(`request from ${req.originalUrl}`);
            console.log(`request type ${req.method}`);
            next();
        }, getQuestions)

        //POST Endpoint
        .post(addNewQuestion);

    app.route('/questions/:questionId')
        //GET question with id
        .get(getQuestionWithId)
        // PUT edit question
        .put(updateQuestion)
        //Delete question
        .delete(deleteQuestion);
};

export default routes;