import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MainJobsView extends Component{
    render() {

        let jobs = this.props.jobs;

        if(jobs <= 0){
            return  <p>Waiting for jobs</p>
        }
        // let jobsFilter = jobs.filter(job => job.categoryName === this.props.category && job.locationName === this.props.location);

        if(jobs.length <= 0){
            return <p>Sorry there are no jobs</p>
        }

        return(
            <div>
                <Link to ={"/login"}> <p>Login</p></Link>
                <h1>Jobs</h1>
                <h3>List of jobs</h3>
                {jobs.map(dat => {
                    return <Link key={dat._id} to={`/`}>
                        <p>{dat.title}</p></Link>
                })}
            </div>
        )
    }
}
export default MainJobsView;