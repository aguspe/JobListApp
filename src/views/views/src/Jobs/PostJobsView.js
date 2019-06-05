import React, { Component } from 'react'
import formObject from '../General/makeObject';

export class AddJob extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const job = formObject.createObject(e);

        this.props.makeJob(
            job.title,
            job.category,
            job.location,
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
            return <p>Loading categories and areas</p>
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Add a title" required/>
                    <select name="location" required>
                        {this.renderDatList(locations)}
                    </select>
                    <select name="category" required>
                        {this.renderDatList(categories)}
                    </select>
                    <textarea type="text" name="description" placeholder="Add a description" required/>
                    <button type="submit">Add a job post</button>
                </form>
            </div>
        )
    }
}

export default AddJob