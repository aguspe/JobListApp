import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/questionRoutes";

const app = express();
const PORT = 3000;
//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mandatorydb',{
    useNewUrlParser: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`server ${PORT}`)
);

app.listen(PORT, ()=>
    console.log(`server ${PORT}`)
);