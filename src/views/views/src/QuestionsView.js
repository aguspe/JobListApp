import React, {Component} from 'react';

class Question extends Component {
    state = {
        data: [],
        title: null,
        description: null,
        answers: null,
    };

    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    getDataFromDb = () => {
        fetch("http://localhost:5000/api/questions")
            .then(data => data.json())
            .then(res => this.setState({ data: res.data }));
    };

    render() {
        const { data } = this.state;
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