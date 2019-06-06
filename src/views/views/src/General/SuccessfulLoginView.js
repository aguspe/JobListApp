import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class SuccessfulLoginView extends Component {

    render() {
        return (
            <div>
                <Link to={`/post/`}>Now you can post companies, click here</Link><br></br>
            </div>
        );
    }
}

export default SuccessfulLoginView;