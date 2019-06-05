import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LocationView extends Component{

    filtering = (list, factor) => {
        return list.filter(dat => dat.location.namePath === factor)
    };

    render() {

        let locations = this.props.locations;
        // let jobs = this.props.jobs;

        if(locations <= 0){
            return  <p>Waiting for locations</p>
        }
        // let jobsFilter = jobs.filter(job => job.category.namePath === this.props.category);

        // if(jobsFilter.length <= 0){
        //     return <p>Sorry there are no jobs</p>
        // }

        return(
            <div>
                <Link to ={"/"}> <p>Go back Home</p></Link>
                <Link to ={"/categories"}> <p>Go back to categories</p></Link>
                <h1>Locations</h1>
                {locations.map(dat => {
                    return <Link key={dat._id} to={`/jobs/${this.props.category}/${dat.namePath}`}>
                        <p>{dat.locationName}
                    {/*({this.filtering(this.filtering, dat.namePath).length})<br></br>*/}
                    </p></Link>
                })}
            </div>
        )
    }
}
export default LocationView;