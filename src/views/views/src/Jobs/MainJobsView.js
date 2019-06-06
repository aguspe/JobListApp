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
        let jobsFilter = jobs.filter(job => job.category.namePath === this.props.category);
console.log(this.props.location);
        console.log(this.props.category);
        if(jobsFilter.length <= 0){
            return <p>Sorry there are no jobs</p>
        }

        return(
            <div>
                <Link to ={"/"}> <p>Go back to home</p></Link>
                <h1>Jobs</h1>
                <h3>List of jobs</h3>
                {jobsFilter.map(dat => {
                    return <Link to={`/job/${dat._id}`}>
                        <p>{dat.title}</p>
                    </Link>
                })}
            </div>
        )
    }
}
export default MainJobsView;