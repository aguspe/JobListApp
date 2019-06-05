import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import MainJobsView from './Jobs/MainJobsView';
// import Login from './User/LoginView';
// import Post from './Jobs/PostJobView';
import CategoriesView from "./Jobs/CategoriesView";
// import LocationView from "./Jobs/LocationView";
// import IndividualJobView from "./Jobs/IndividualJobView";


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };

        // this.postDataToDB = this.postDataToDB.bind(this);
    }

    storage(){
        let data = this.state.data;
        localStorage.setItem("data", JSON.stringify(data))
    };
    componentDidMount() {
        //await data.
        // this.getJobs();
        this.getCategoriesFromDb();
        // this.getLocations();
    }
    // never let a process live forever
    // always kill a process everytime we are done using it
    // componentWillUnmount() {
    //     if (this.state.intervalIsSet) {
    //         clearInterval(this.state.intervalIsSet);
    //         this.setState({ intervalIsSet: null });
    //     }
    // }

    // async getJobs () {
    //     const response = await fetch(
    //         `http://localhost:5000/api/jobs`
    //     );
    //     const json = await response.json();
    //     this.setState({ jobs: json });
    // }

    getCategoriesFromDb = () => {
        fetch("http://localhost:5000/api/categories")
            .then(data => data.json())
            .then(res => this.setState({ data: res.data }));
        this.storage()
    };
    // async getLocations (){
    //     const response = await fetch(`http://localhost:5000/api/locations`);
    //     console.log(response);
    //     const json = await response.json();
    //     this.setState({locations:json});
    //
    // }

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
                                       <CategoriesView {...props} categories={this.state.data}/>
                                   </div>
                               }
                        />
                        {/*<Route exact path={'/'}*/}
                        {/*       render={(props) =>*/}
                        {/*           <LocationView {...props}*/}
                        {/*                         jobs={this.state.jobs}*/}
                        {/*                         locations={this.state.locations}/>*/}
                        {/*       }*/}
                        {/*/>*/}

                        {/*<Route exact path={'/jobs/'}*/}
                        {/*       render={(props) =>*/}
                        {/*           <CategoriesView {...props}*/}
                        {/*                 jobs={this.state.jobs}*/}
                        {/*                 category={props.match.params.category}*/}
                        {/*                 areas={this.state.areas}*/}
                        {/*           />*/}
                        {/*       }*/}
                        {/*/>*/}

                        {/*<Route exact path={'/jobs/:category/:location'}*/}
                        {/*       render={(props) =>*/}
                        {/*           <MainJobsView {...props}*/}
                        {/*                    jobs={this.state.jobs}*/}
                        {/*                    category={props.match.params.category}*/}
                        {/*                    area={props.match.params.locations}*/}
                        {/*           />*/}
                        {/*       }*/}
                        {/*/>*/}
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