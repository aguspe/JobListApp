import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const QuestionSchema = new Schema({
   title: {
       type : String,
       required : 'Enter a title'
   },
    description: {
        type : String,
        required : 'Enter a description'
    },
    answer: {
        type : String
    },
    created_date: {
        type : Date,
        default : Date.now()
    }
});