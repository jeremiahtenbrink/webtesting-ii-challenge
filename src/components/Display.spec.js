import React from "react";
import { render } from "react-testing-library";

import Display from "./Display";

describe( "<Display />", () => {
    it( "renders balls", () => {
        const { getByText } = render( <Display balls={ 3 }/> );
        getByText( /balls: 3/i );
    } );
    it( "renders strikes", () => {
        const { getByText } = render( <Display strikes={ 2 }/> );
        getByText( /strikes: 2/i );
    } );
} );