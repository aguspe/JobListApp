import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CategoriesView extends Component{

    render() {
        return(
            <div>
                <Link to ={"/login"}> <p>Login</p></Link>
                <Link to ={"/post"}><p>Post</p></Link>
                <h1>Job index</h1>
                <h3>List of jobs</h3>
                {this.props.categories.map(el => {
                    return <Link key={el._id} to={"/job/" + el.category}><p>Title: {el.category},<br></br>
                    </p></Link>
                })}
            </div>
        )
    }
}
export default CategoriesView;