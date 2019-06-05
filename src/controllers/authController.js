import {UserSchema} from "../models/userModel";
import mongoose from "mongoose";
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = mongoose.model('User', UserSchema);

export const authenticateUser = (req, res)=> {
    const { email, password } = req.body;
    User.findOne({ email }, function(err, user) {
        if (err) {
            console.error(err);
            res.status(500)
                .json({
                    error: 'Internal error please try again'
                });
        } else if (!user) {
            res.status(401)
                .json({
                    error: 'Incorrect email or password'
                });
        } else {
            user.isCorrectPassword(password, function(err, same) {
                if (err) {
                    res.status(500)
                        .json({
                            error: 'Internal error please try again'
                        });
                } else if (!same) {
                    res.status(401)
                        .json({
                            error: 'Incorrect email or password'
                        });
                } else {
                    // Issue token
                    const payload = { email };
                    const token = jwt.sign(payload, config.jwtSecret, {
                        expiresIn: '1h'
                    });
                    res.status(200).json({email: payload, token});
                }
            });
        }
    });
};