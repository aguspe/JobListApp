import React, {Component} from 'react';
import axios from "axios";

class PostQuestionView extends Component {

    putDataToDB = (title,description) => {
        console.log('its ne ' + this.props.info.data.map(data => data.id));
        let currentIds = this.props.info.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }};
    render() {
        return (
                <div style={{ padding: "10px" }}>
                    <input
                        type="text"
                        onChange={e => this.setState({ title: e.target.value })}
                        placeholder="add something in the database"
                        style={{ width: "200px" }}
                    />
                    <input
                        type="text"
                        onChange={e => this.setState({ description: e.target.value })}
                        placeholder="add something in the database"
                        style={{ width: "200px" }}
                    />
                    <button onClick={() => this.putDataToDB(this.props.title, this.props.description )}>
                        ADD
                    </button>
                </div>
        );
    }
}

export default PostQuestionView;