import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import PostQuestionView from "./partials/PostQuestionView";

class Question extends Component {

    render() {
        const { data } = this.props.data;
        console.log(this.props.data);
        return (
            <div>
                <ul>
                    {data.length <= 0
                        ? "NO DB ENTRIES YET"
                        : data.map(dat => (
                            <li style={{ padding: "10px" }} key={data.message}>
                                <Link to={`/questions/${dat._id}`}> <span style={{ color: "gray" }}> title: </span> {dat.title} <br /></Link>
                                {/*<span style={{ color: "gray" }}> description: </span> {dat.description} <br />*/}
                                {dat.message}
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

export default Question;