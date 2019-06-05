import mongoose from "mongoose";
import {UserSchema} from "../models/userModel";

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res)=> {
    let newUser = new User(req.body);

    newUser.save((err, user)=>{
        if(err){
            res.send(err);
        }
        res.json(user);
    });
};

//
// export const withAuth = (req, res, next) => {
//     const token =
//         req.body.token ||
//         req.query.token ||
//         req.headers['x-access-token'] ||
//         req.cookies.token;
//     if (!token) {
//         res.status(401).send('Unauthorized: No token provided');
//     } else {
//         jwt.verify(token, secret, function(err, decoded) {
//             if (err) {
//                 res.status(401).send('Unauthorized: Invalid token');
//             } else {
//                 req.email = decoded.email;
//                 next();
//             }
//         });
//     }
// };
//
// export const checkToken = (req, res) => {
//     res.sendStatus(200);
// };