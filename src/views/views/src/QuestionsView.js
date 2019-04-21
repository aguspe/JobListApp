import React, {Component} from 'react';

class Question extends Component {

    render() {
        const { data } = this.props.data;
        return (
            <div>
                <ul>
                    {data.length <= 0
                        ? "NO DB ENTRIES YET"
                        : data.map(dat => (
                            <li style={{ padding: "10px" }} key={data.message}>
                                <span style={{ color: "gray" }}> title: </span> {dat.title} <br />
                                <span style={{ color: "gray" }}> description: </span> {dat.description} <br />
                                {dat.message}
                            </li>
                        ))}
                </ul>
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
                    <button onClick={() => this.putDataToDB(this.state.title, this.state.description )}>
                        ADD
                    </button>
                </div>
            </div>
        );
    }
}

export default Question;