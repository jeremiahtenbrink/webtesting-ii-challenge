import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "react-testing-library";

describe( "<App />", () => {
    it( "renders without crashing", () => {
        const div = document.createElement( "div" );
        ReactDOM.render( <App/>, div );
        ReactDOM.unmountComponentAtNode( div );
    } );
    
    it( "renders successfully", () => {
        render( <App/> );
    } );
    
    it( "renders play ball", () => {
        const { getByText, queryByText, debug } = render( <App/> );
        
        getByText( /play ball/i );
    } );
    
} );

