import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainJobsView from './Jobs/MainJobsView';
// import Login from './User/LoginView';
// import Post from './Jobs/PostJobView';
import CategoriesView from "./Jobs/CategoriesView";
import LocationView from "./Jobs/LocationView";
// import IndividualJobView from "./Jobs/IndividualJobView";


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            jobs: [],
            locations: []
        };

        // this.postDataToDB = this.postDataToDB.bind(this);
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
        //await data.
        this.getJobsFromDb();
        this.getCategoriesFromDb();
        this.getLocationsFromDb();
    }
    // never let a process live forever
    // always kill a process every time we are done using it
    // componentWillUnmount() {
    //     if (this.state.intervalIsSet) {
    //         clearInterval(this.state.intervalIsSet);
    //         this.setState({ intervalIsSet: null });
    //     }
    // }

    async getJobsFromDb () {
        const response = await fetch(
            `http://localhost:5000/api/jobs`
        );
        const json = await response.json();
        this.setState({ jobs: json });
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

    // getJobsWithCategoryAndLocation = (category, location) => {
    //     fetch("http://localhost:5000app.route/api/"+category+"/"+location)
    //         .then(jobs => jobs.json())
    //         .then(res => this.setState({ jobs: res.data }));
    //     this.jobsStorage()
    // };
    // getJobById = (id) => {
    //     let jobFound = this.state.jobs.find(elm => elm._id === id);
    //     return jobFound;
    // };
    //
    // renderJob = (props, id) => {
    //     let job = this.getJobById(id);
    //     return <IndividualJobView {...props}
    //                 job={job}
    //     />
    // };

    // postDataToDB(title, company, description, location, category){
    //     fetch(`http://localhost:5000/api/jobs/`, {
    //         method:'post',
    //         body: JSON.stringify({
    //             "title": title,
    //             "company": company,
    //             "description": description,
    //             "location": location,
    //             "category": category
    //         }),
    //         headers: new Headers({ "Content-Type": "application/json" }) // add headers
    //
    //     })
    // }

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path={'/'}
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

                        {/*<Route exact path={'/jobs/'}*/}
                        {/*       render={(props) =>*/}
                        {/*           <CategoriesView {...props}*/}
                        {/*                 jobs={this.state.jobs}*/}
                        {/*                 category={props.match.params.category}*/}
                        {/*                 areas={this.state.areas}*/}
                        {/*           />*/}
                        {/*       }*/}
                        {/*/>*/}

                        <Route exact path={'/jobs/:category/:location'}
                               render={(props) =>
                                   <MainJobsView {...props}
                                                 // jobsCL={this.getJobsWithCategoryAndLocation(props.match.params.category, props.match.params.location )}
                                                    jobs={this.state.jobs}
                                                    category={props.match.params.category}
                                                    location={props.match.params.location}
                                   />
                               }
                        />
                        {/*<Route exact path={'/job/:id'}*/}
                        {/*       render={(props) =>*/}
                        {/*           this.renderJob(props, props.match.params.id)*/}
                        {/*       }*/}
                        {/*/>*/}
                        {/*<Route exact path='/login' component={Login}/>*/}
                        {/*<Route exact path='/post' component={Post}/>*/}
                        {/*<Route exact path={'/post'}*/}
                        {/*       render={(props) =>*/}
                        {/*           <Post {...props}*/}
                        {/*                 header={'Post job add'} postDataToDB={this.postDataToDB} form={this.postDataToDB}/>*/}
                        {/*       }*/}
                        {/*/>*/}

                    </Switch>
                </Router>
            </div>

        );
    }


}

export default App;