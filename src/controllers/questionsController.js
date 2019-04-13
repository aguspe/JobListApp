import mongoose from "mongoose";
import {QuestionSchema} from "../models/questionModel";

const Question = mongoose.model('Question', QuestionSchema);

export const addNewQuestion = (req, res)=> {
    let newQuestion = new Question(req.body);

    newQuestion.save((err, question)=>{
        if(err){
            res.send(err);
        }
        res.json(question);
    });
};

export const getQuestions = (req, res)=>{
    Question.find({},(err, question)=>{
        if(err){
            res.send(err);
        }
        res.json(question);
    });
};

export const getQuestionWithId = (req, res)=>{
    Question.findById(req.params.questionId,(err, question)=>{
        if(err){
            res.send(err);
        }
        res.json(question);
    })
};

export const updateQuestion = (req, res) => {
    Question.findOneAndUpdate({ _id: req.params.questionId}, req.body, { new: true }, (err, question) => {
        if (err) {
            res.send(err);
        }
        res.json(question);
    })
};

export const deleteQuestion = (req, res) => {
    Question.remove({ _id: req.params.questionId}, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'the question has been deleted'});
    })
};