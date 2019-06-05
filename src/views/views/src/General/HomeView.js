import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class HomeView extends Component {

    render() {
        return (
            <div>
                <Link to={`/categories/`}>Search for a job!</Link>
            </div>
        );
    }
}

export default HomeView;