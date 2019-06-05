import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CategoriesView extends Component{

    // filtering = (list, factor) => {
    //     return list.filter(dat => dat.namePath === factor)
    // };

    render() {

        let categories = this.props.categories;
        // let jobs = this.props.jobs;

        if(categories <= 0){
            return  <p>Categories loading...</p>
        }

        return(
            <div>
                <Link to ={"/"}> <p>Go back Home</p></Link>
                <h1>Categories</h1>
                {categories.map(dat => {
                    return <Link key={dat._id} to={`/jobs/${dat.namePath}`}><p>{dat.categoryName} <br></br>
                    </p></Link>
                })}
            </div>
        )
    }
}
export default CategoriesView;