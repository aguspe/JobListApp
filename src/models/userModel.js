import mongoose from "mongoose";
const bcrypt = require('bcrypt');

const saltRounds = 10;
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

UserSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('password')) {
        const document = this;
        bcrypt.hash(document.password, saltRounds,
            function (err, hashedPassword) {
                if (err) {
                    next(err);
                } else {
                    document.password = hashedPassword;
                    next();
                }
            });
    }
});

UserSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
};