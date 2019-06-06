import React from 'react'
import HomeView from "../General/HomeView";
import {render} from "@testing-library/react";

describe('Check for link text', () => {
    it('should contain the proper text', () => {
        const {getByText} = render(<HomeView/>);
       getByText('Login as a company before posting');
    });
});

