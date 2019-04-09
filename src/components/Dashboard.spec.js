import React from "react";
import {
    render, fireEvent, waitForElement, cleanup
} from "react-testing-library";

import App from "../App";
import Dashboard from "./Dashboard";

afterEach( cleanup );

describe( "<Dashboard />", () => {
    it( "renders ball, hit, and strike button", () => {
        const { getByText } = render( <Dashboard/> );
        getByText( /ball/i );
        getByText( /strike/i );
        getByText( /hit/i );
    } );
    
    it( "changes the ball and strike count when ball button is pressed", () => {
        let { getByText, getByTestId } = render( <App/> );
        getByText( /balls: 0/i );
        getByText( /strikes: 0/i );
        const button = getByTestId( /ball/i );
        fireEvent.click( button );
        getByText( /balls: 1/i );
        getByText( /strikes: 1/i );
    } );
    
    it( "changes strike count when strike button is pressed.", () => {
        const { getByText, getByTestId } = render( <App/> );
        getByText( /strikes: 0/i );
        const button = getByTestId( /Strike/i );
        fireEvent.click( button );
        getByText( /strikes: 1/i );
    } );
    
    it( "change the number of balls and number of strikes but doesn't go over 2 strikes",
        () => {
            const { getByText, getByTestId } = render( <App/> );
            getByText( /strikes: 0/i );
            getByText( /balls: 0/i );
            const button = getByText( "Ball", { exact: true } );
            fireEvent.click( button );
            fireEvent.click( button );
            getByText( /strikes: 2/i );
            getByText( /balls: 2/i );
            fireEvent.click( button );
            getByText( /strikes: 2/i );
            getByText( /balls: 3/i );
        }
    );
} );