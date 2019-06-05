import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import JobPosts from './MainJobsView';
import Login from './LoginView';
import Post from './PostJobView';


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            jobs: [],
            areas: []
        };

        this.postDataToDB = this.postDataToDB.bind(this);
    }

    componentDidMount() {
        //await data.
        this.getJobs();
        this.getLocation()
    }

    async getJobs () {
        const response = await fetch(
            `http://localhost:5000/api/jobs`
        );
        const json = await response.json();
        this.setState({ jobs: json });
    }

    async getLocation (){
        const response = await fetch(`http://localhost:5000/api/locations`);
        console.log(response)
        // const json = await response.json();
        // this.setState({areas:json})


    }

    postDataToDB(title, company, description, location, category){
        fetch(`http://localhost:5000/api/jobs/`, {
            method:'post',
            body: JSON.stringify({
                "title": title,
                "company": company,
                "description": description,
                "location": location,
                "category": category
            }),
            headers: new Headers({ "Content-Type": "application/json" }) // add headers

        })
    }

    render() {
        let jobs = this.state.jobs;
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path = '/'
                               render={(props)=>
                                   <JobPosts {...props}
                                             jobs={jobs}
                                   />
                               }
                        />
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/post' component={Post}/>
                        <Route exact path={'/post'}
                               render={(props) =>
                                   <Post {...props}
                                         header={'Post job add'} postDataToDB={this.postDataToDB} form={this.postDataToDB}/>
                               }
                        />

                    </Switch>
                </Router>
            </div>

        );
    }


}

export default App;