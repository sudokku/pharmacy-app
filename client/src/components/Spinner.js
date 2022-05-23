import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Spinner = () => {
    return (
        <Container className="spinner-container">
            <Row className="d-flex justify-content-center">
                <Col xs={2} lg={1}>
                    <img src="/spinner.gif" alt="Loading..." />
                </Col>
            </Row>
        </Container>
    );
};

export default Spinner;
