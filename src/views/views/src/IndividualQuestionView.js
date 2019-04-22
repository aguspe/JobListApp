import React, {Component} from 'react';

class IndividualQuestion extends Component {

    render() {
        let question = this.props.question;


        return (
            <div>
                <h3>{question.title}</h3>

                <p>{question.description}</p>
            </div>
        );
    }
}

export default IndividualQuestion;