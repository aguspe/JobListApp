import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainJobsView from './Jobs/MainJobsView';
import CategoriesView from "./Jobs/CategoriesView";
import LocationView from "./Jobs/LocationView";
import IndividualJobView from "./Jobs/IndividualJobView";
import HomeView from "./General/HomeView";
import LoginView from "./User/LoginView";
import PostJobsView from "./Jobs/PostJobsView";
import withAuth from './General/withAuth';
import SuccessfulLoginView from "./General/SuccessfulLoginView";


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            jobs: [],
            locations: []
        };
    }

    categoryStorage(){
        let categories = this.state.categories;
        localStorage.setItem("categories", JSON.stringify(categories))
    };

    jobsStorage(){
        let jobs = this.state.jobs;
        localStorage.setItem("jobs", JSON.stringify(jobs))
    };

    locationStorage(){
        let locations = this.state.locations;
        localStorage.setItem("locations", JSON.stringify(locations))
    };

    componentDidMount() {
        this.getJobsFromDb();
        this.getCategoriesFromDb();
        this.getLocationsFromDb();
    }

    async getJobsFromDb () {
        const response = await fetch(
            `http://localhost:5000/api/jobs`
        );
        const json = await response.json();
        this.setState({ jobs: json });
        this.jobsStorage();
    }

    getCategoriesFromDb = () => {
        fetch("http://localhost:5000/api/categories")
            .then(categories => categories.json())
            .then(res => this.setState({ categories: res.data }));
        this.categoryStorage()
    };
    getLocationsFromDb = () => {
        fetch("http://localhost:5000/api/locations")
            .then(locations => locations.json())
            .then(res => this.setState({ locations: res.data }));
        this.locationStorage()
    };

    getJobById = (id) => {
         return this.state.jobs.find(dat => dat._id === id);
    };
    //
    findJob = (props, id) => {
        let job = this.getJobById(id);
        return <IndividualJobView {...props}
                    job={job}
        />
    };

    makeJob = (title, category, company, location, description) => {
            fetch(`http://localhost:5000/api/jobs/`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    title: title,
                    category: category,
                    company: company,
                    location: location,
                    description: description
                })
            })
                .then(json => {
                    console.log(json);
                    this.getJobsFromDb();
                })
    };

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path={'/'}
                               render={() =>
                                   <div>
                                       <HomeView />
                                   </div>
                               }
                        />
                        <Route exact path={'/login'}
                               render={() =>
                                   <div>
                                       <LoginView />
                                   </div>
                               }
                        />
                        <Route exact path={'/categories'}
                               render={(props) =>
                                   <div>
                                       <CategoriesView {...props} jobs={this.state.jobs}
                                                       categories={this.state.categories}/>
                                   </div>
                               }
                        />
                        <Route exact path={'/jobs/:category'}
                               render={(props) =>
                                   <LocationView {...props}
                                                 jobs={this.state.jobs}
                                                 category={props.match.params.category}
                                                 locations={this.state.locations}/>
                               }
                        />
                        <Route path="/succesfulLogin" component={withAuth(SuccessfulLoginView)} />
                        <Route exact path={'/post'}
                               render={(props) =>
                                   <PostJobsView {...props}
                                                   makeJob={this.makeJob}
                                                   categories={this.state.categories}
                                                   locations={this.state.locations}
                                   />
                               }
                        />

                        <Route exact path={'/jobs/:category/:location'}
                               render={(props) =>
                                   <MainJobsView {...props}
                                                    jobs={this.state.jobs}
                                                    category={this.state.categories}
                                                    location={this.state.locations}
                                   />
                               }
                        />
                        <Route exact path={'/job/:id'}
                               render={(props) =>
                                   this.findJob(props, props.match.params.id)
                               }
                        />
                        <Route exact path={'/login'}/>
                    </Switch>
                </Router>
            </div>

        );
    }


}

export default App;