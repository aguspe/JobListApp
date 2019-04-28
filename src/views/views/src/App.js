import React, { Component } from "react";
import axios from "axios";
import Question from "./QuestionsView";
import IndividualQuestion from "./IndividualQuestionView"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostQuestionView from "./partials/PostQuestionView";
import PostAnswer from "./partials/PostAnswerView";
import Home from "./HomeView";

class App extends Component {
    // initialize our state
    state = {
        data: JSON.parse(localStorage.getItem('data')),
        title: null,
        description: null,
        answers: [],
    };

    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI
    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    // never let a process live forever
    // always kill a process everytime we are done using it
    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    storage(){
        let data = this.state.data;
        localStorage.setItem("data", JSON.stringify(data))
    };

    getDataFromDb = () => {
        fetch("http://localhost:5000/api/questions")
            .then(data => data.json())
            .then(res => this.setState({ data: res.data }));
        this.storage()
    };

    getDataFromDbWithId (id) {
        console.log(this.state.data) ;
        console.log(id);
        return this.state.data.find((dat =>dat._id === id))
    };

    // our put method that uses our backend api
    // to create new query into our data base
    putDataToDB = (title,description) => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post("http://localhost:5000/api/questions", {
            id: idToBeAdded,
            title: title,
            description: description,
            answers: []
        });
    };

    putAnswersToDB(text, id){
        axios.post("http://localhost:5000/api/questions/"+id+"/answers", {
            text: text,
            headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" })
        });
    }

    updateVotes(votes, id, questionId, text){
        console.log(votes, id, questionId, text);
        console.log(typeof votes);
        axios.put('http://localhost:5000/api/questions/'+questionId+'/vote', {
            answerId: id,
            votes: parseInt(votes),
            questionId:questionId,
            text:text,
            headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" })
        })}

    render() {
        return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}
                       render={(props) =>
                           <div>
                               <Home
                               />
                           </div>
                       }
                />
            <Route exact path={'/questions'}
                                 render={(props) =>
                                     <div>
                                     <Question {...props}
                                               data={this.state}
                                     />
                                         <PostQuestionView putDataToDB={this.putDataToDB.bind(this)}/>
                                     </div>
                                 }
            />
            <Route exact path={'/questions/:id'}
                   render={(props) =>
                       <div>
                       <IndividualQuestion {...props}
                                                question={this.getDataFromDbWithId(props.match.params.id)}
                                                updateVotes={this.updateVotes.bind(this)}

                       />
                       <div>
                       <PostAnswer
                           id={props.match.params.id}
                           putAnswersToDB={this.putAnswersToDB.bind(this)}
                       />
                       </div>
                       </div>
                   }
            />
            </Switch>
        </BrowserRouter>);
    }
}

export default App;