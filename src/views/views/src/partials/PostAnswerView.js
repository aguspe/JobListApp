import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PostAnswer extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: null,
        };
    }
    render() {
        return (
            <div style={{ padding: "10px" }}>
                <input
                    type="text"
                    onChange={e => this.setState({ text: e.target.value })}
                    placeholder="add your answer here"
                    style={{ width: "200px" }}
                />
                <button onClick={() => this.props.putAnswersToDB(this.state.text, this.props.id)}>
                    ADD ANSWER
                </button>
                <div>
                <Link to={`/questions/`}>Go back to the questions</Link>
                </div>
            </div>
        );
    }
}

export default PostAnswer;