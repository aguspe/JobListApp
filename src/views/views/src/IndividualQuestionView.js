import React, {Component} from 'react';
import {Link} from "react-router-dom";

class IndividualQuestion extends Component {

    render() {
        let question = this.props.data;
        let list = [];

        question.id.forEach((elm) => {
            list.push(<li>
                <Link to={`/questions/with/${elm}`}>{elm}</Link>
            </li>)
        });

        return (
            <div>
                <h3>{question.title}</h3>

                <p>{question.description}</p>
            </div>
        );
    }
}

export default IndividualQuestion;