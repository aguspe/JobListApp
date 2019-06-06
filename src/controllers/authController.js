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
                        res.cookie('token', token, { httpOnly: true })
                            .status(200).json({email: payload, token});
                    }
                });
            }
        });
};

export const withAuth = (req, res, next) => {
        const token =
            req.body.token ||
            req.query.token ||
            req.headers['x-access-token'] ||
            req.cookies.token;
        if (token === null) {
            res.status(401).send('Unauthorized: No token provided');
        }
         if (!token) {
                res.status(401).send('Unauthorized: No token provided');
            }
        else {
            jwt.verify(token, config.jwtSecret, function(err, decoded) {
                if (err) {
                    res.status(401).send('Unauthorized: Invalid token');
                } else {
                    req.email = decoded.email;
                    next();
                }
            });
        }
    };

export const checkToken = (req, res) => {
    res.sendStatus(200);
};