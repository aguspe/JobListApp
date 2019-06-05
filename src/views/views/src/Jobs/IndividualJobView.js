import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class IndividualJobView extends Component {
    render() {
        let job = this.props.job;

        if(!job){
            return  <p>Job loading...</p>
        }

        return (
            <div>
                <Link to ={"/"}> <p>Go back to home</p></Link>
                <header>
                    <h1>Title : {job.title}</h1>
                    <h3>Company : {job.company}</h3>
                    <p>Description: {job.description}</p>
                </header>
            </div>
        )
    }
}

export default IndividualJobView