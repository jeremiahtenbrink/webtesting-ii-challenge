import React from "react";
import { Row, Col, Button } from "reactstrap";

const Dashboard = props => {
    return (
        <Row className={ "dashboard" }>
            <Col sm={ 12 } md={ { size: 2, offset: 2 } }
                 className={ "balls-btn" }>
                <Button onClick={ props.handleBall }>Ball</Button>
            </Col>
            <Col sm={ 12 } md={ { size: 2, offset: 2 } }
                 className={ "strikes-btn" }>
                <Button onClick={ props.handleStrike }>Strike</Button>
            </Col>
            <Col sm={ 12 } md={ { size: 2, offset: 2 } }>
                <Button onClick={ props.handleHit }>Hit</Button>
            </Col>
        </Row>
    );
};

export default Dashboard;