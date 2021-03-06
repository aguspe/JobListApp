import React from 'react'
import HomeView from "../General/HomeView";
import {cleanup, render, fireEvent} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe('Check for link text', () => {
    it('should contain the proper text', () => {
        const {getByText} = render(<BrowserRouter><HomeView/></BrowserRouter>);
       getByText('Login as a company before posting');
    });
});

afterEach(cleanup);
describe('Link clicked clicked', () => {
    it('should click on text', () => {
        const { getByText } = render(<BrowserRouter><HomeView name="Search for a job!" /></BrowserRouter>);
        const textEl = getByText('Search for a job!');
        fireEvent.click(textEl)
    })
});

afterEach(cleanup);
describe('Test that there are no changes on re rendering', () => {
    it('should contains name with prop change', () => {
        const { getByText, rerender } = render(<BrowserRouter><HomeView name="Login as a company before posting" /></BrowserRouter>);
        getByText('Login as a company before posting')
        rerender(<BrowserRouter><HomeView name="Login as a company before posting" /></BrowserRouter>);
        getByText('Login as a company before posting')
    })
});