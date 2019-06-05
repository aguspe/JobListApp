import React, { Component } from 'react'
import Style from '../css/style.css'
import formObject from '../General/makeObject';
import {Link} from "react-router-dom";

export class PostJobsView extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const job = formObject.createObject(e);

        this.props.makeJob(
            job.title,
            job.category,
            job.location,
            job.company,
            job.description,
        )
    };

    renderDatList = (datList) => {
        return datList.map(dat => (
            <option key={dat._id} value={dat._id}>{dat.name}</option>
        ))
    };

    render() {
        let categories = this.props.categories;
        let locations = this.props.locations;

        if(!categories || !locations){
            return <p>Waiting for the categories and locations</p>
        }

        return (
            <div>
                <Link to ={"/"}> <p>Go back Home</p></Link><br></br>
                <Link to ={"/"}> <p>Go to see the jobs</p></Link><br></br>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Add a title" required/><br></br>
                    <input type="text" name="company" placeholder="Add a company" required/><br></br>
                    <textarea type="text" name="description" placeholder="Add a description" required/><br></br>
                    <select name="location" required>
                        {this.renderDatList(locations)}
                    </select>
                    <select name="category" required>
                        {this.renderDatList(categories)}
                    </select>
                    <button type="submit">Add a job post</button>
                </form>
            </div>
        )
    }
}

export default PostJobsView