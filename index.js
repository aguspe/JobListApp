import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/questionRoutes";

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_kj476tpm:hiqbhabd6hp4cagkms0fscqfg2@ds147926.mlab.com:47926/heroku_kj476tpm',{
    useNewUrlParser: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(cors());

routes(app);

app.get('/', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(PORT, ()=>
    console.log(`server ${PORT}`)
);