import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MainJobsView extends Component{
    render() {

        let jobs = this.props.jobs;
        // let categories = this.props.categories;
        // let locations = this.props.locations;

        if(jobs <= 0){
            return  <p>Waiting for jobs</p>
        }
        // let jobsFilter = jobs.filter(job => job.category === this.props.categories._id && job.location === this.props.locations._id);

        if(jobs.length <= 0){
            return <p>Sorry there are no jobs</p>
        }

        return(
            <div>
                <Link to ={"/"}> <p>Go back to home</p></Link>
                <h1>Jobs</h1>
                <h3>List of jobs</h3>
                {jobs.map(dat => {
                    return <Link to={`/job/${dat._id}`}>
                        <p>{dat.title}</p>
                    </Link>
                })}
            </div>
        )
    }
}
export default MainJobsView;