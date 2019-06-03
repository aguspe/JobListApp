import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    email: {
        type : String,
        required : 'Enter an email'
    },
    password: {
        type : String,
        required : 'Enter a password'
    },
});