import React, { Component } from 'react'
import formObject from '../General/makeObject';
import Style from '../css/style.css'

export class PostJobsView extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const job = formObject.makeObject(e);

        this.props.makeJob(
            job.title,
            job.category,
            job.company,
            job.area,
            job.description,
        )
    };

    renderElmList = (elmList) => {
        return elmList.map(elm => (
            <option key={elm._id} value={elm._id}>{elm.name}</option>
        ))
    };

    render() {
        let categories = this.props.categories;
        let locations = this.props.locations;

        if(!categories || !locations){
            return <p>Wait for the locations and categories</p>
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Add a title" required/><br></br>
                    <textarea type="text" name="description" placeholder="Add a description" required/><br></br>
                    <input type="text" name="company" placeholder="Add a company" required/><br></br>
                    <select name="area" required>
                        {this.renderElmList(locations)}
                    </select>
                    <select name="category" required>
                        {this.renderElmList(categories)}
                    </select>
                    <button type="submit">Add a job post</button>
                </form>
            </div>
        )
    }
}

export default PostJobsView