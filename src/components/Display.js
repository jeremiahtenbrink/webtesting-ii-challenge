import React from "react";
import { Row, Col } from "reactstrap";

const Display = ( { balls, strikes } ) => {
    return (
        <div className={ "display" }>
            <Row>
                <Col sm={ 12 } md={ { size: 4, offset: 2 } }>
                    <div className={ "balls" }>
                        Balls: { balls ? balls : 0 }
                    </div>
                </Col>
                <Col sm={ 12 } md={ { size: 4, offset: 2 } }>
                    <div className={ "strikes" }>
                        Strikes: { strikes ? strikes : 0 }
                    </div>
                </Col>
            </Row>
        
        </div>
    );
};

export default Display;