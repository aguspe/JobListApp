import React from 'react'
import LoginView from "../User/LoginView";
import {render} from "@testing-library/react";

describe('Check for text in header', () => {
    it('should contain the proper text', () => {
        const {getByText} = render(<LoginView/>);
        getByText('Login as a company!');
    });
});

