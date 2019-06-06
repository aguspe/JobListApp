import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class HomeView extends Component {

    render() {
        return (
            <div>
                <Link to={`/categories/`}>Search for a job!</Link><br></br>
                <Link to={`/succesfulLogin/`}>Are you a company? Post a job!</Link><br></br>
                <Link to={`/login/`}>Login as a company before posting</Link>
            </div>
        );
    }
}

export default HomeView;