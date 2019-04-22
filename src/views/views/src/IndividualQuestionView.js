import React, {Component} from 'react';

class IndividualQuestion extends Component {

    render() {
        let question = this.props.question;


        return (
            <div>
                <h3>{question.title}</h3>

                <p>{question.description}</p>

                <ul>
                    {question.answers.length <= 0
                        ? "NO Answers yet"
                        : question.answers.map(dat => (
                            <li style={{ padding: "10px" }} key={question.message}>
                                 <span style={{ color: "gray" }}> </span> {dat.text} <br />
                                {/*<span style={{ color: "gray" }}> description: </span> {dat.description} <br />*/}
                                {dat.message}
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

export default IndividualQuestion;