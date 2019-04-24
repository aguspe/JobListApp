import React, {Component} from 'react';

class PostAnswer extends Component {
    render() {
        return (
            <div style={{ padding: "10px" }}>
                <input
                    type="text"
                    onChange={e => this.setState({ text: e.target.value })}
                    placeholder="add something in the database"
                    style={{ width: "200px" }}
                />
                <button onClick={() => this.props.putDataToDB(this.state.answers.text)}>
                    ADD
                </button>
            </div>
        );
    }
}

export default PostAnswer;