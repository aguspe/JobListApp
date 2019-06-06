import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LocationView extends Component{

    render() {

        let locations = this.props.locations;

        if(locations <= 0){
            return  <p>Waiting for locations</p>
        }

        return(
            <div>
                <Link to ={"/"}> <p>Go back Home</p></Link>
                <Link to ={"/categories"}> <p>Go back to categories</p></Link>
                <h1>Locations</h1>
                {locations.map(dat => {
                    return <Link key={dat._id} to={`/jobs/${this.props.category}/${dat.namePath}`}>
                        <p>{dat.name}
                    </p></Link>
                })}
            </div>
        )
    }
}
export default LocationView;