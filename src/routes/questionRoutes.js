import {
    addNewQuestion,
    getQuestions,
    getQuestionWithId,
    updateQuestion,
    postAnswerToQuestion,
    getQuestionAnswers,
    deleteQuestion,
    updateVoteOnAnswers
} from "../controllers/questionsController";

const routes = (app) => {
    app.route('/api/questions')
        .get((req, res, next)=> {
            //middleware
            console.log(`request from ${req.originalUrl}`);
            console.log(`request type ${req.method}`);
            next();
        }, getQuestions)

        //POST Endpoint
        .post(addNewQuestion);

    app.route('/api/questions/:questionId')
        //GET question with id
        .get(getQuestionWithId)
        // PUT edit question
        .put(updateQuestion)
        //Delete question
        .delete(deleteQuestion);

    app.route('/api/questions/:questionId/answers')
        //POST answer
        .post(postAnswerToQuestion)
        //DELETE answer
        .get(getQuestionAnswers);

    app.route('/api/questions/:questionId/answers/answerId')
        //PUT vote
        .put(updateVoteOnAnswers);
};

export default routes;