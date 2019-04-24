import React, {Component} from 'react';

class PostQuestionView extends Component {
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
                    <button onClick={() => this.props.putDataToDB(this.state.title, this.state.description )}>
                        ADD
                    </button>
                </div>
        );
    }
}

export default PostQuestionView;