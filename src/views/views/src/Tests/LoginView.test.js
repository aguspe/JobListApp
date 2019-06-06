import React from 'react'
import LoginView from "../User/LoginView";
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe('Check for text in header', () => {
    it('should contain the proper text', () => {
        const {getByText} = render(<BrowserRouter><LoginView/></BrowserRouter>);
        getByText('Login as a company!');
    });
});

