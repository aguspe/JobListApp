import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/routes";

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_kj476tpm:hiqbhabd6hp4cagkms0fscqfg2@ds147926.mlab.com:47926/heroku_kj476tpm',{
    useNewUrlParser: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Origin",
        "https://frameworksexamagustin.herokuapp.com/api"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X -Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(cors());
app.use(cookieParser());
routes(app);

app.use(express.static(path.join(__dirname, '/src/views/views/build')));
app.get('/api', function (req, res) {
    const index = path.join(__dirname, '/src/views/views/build', 'index.html');
    res.sendFile(index);
});

app.listen(PORT, ()=>
    console.log(`server ${PORT}`)
);