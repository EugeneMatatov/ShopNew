import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
const Contacts = () => {
  return (
    <Container>
      <Col className="text-center py-3">
        <a href="https://eugene-matatov.com/">
          <i class="fas fa-house-user">Link to my page</i>
        </a>
      </Col>
      <Row>
        <Col className="text-center py-3">Eugene.matatov@gmail.com</Col>
      </Row>
      <Row>
        <Col className="text-center py-3">
          <a href="https://il.linkedin.com/in/eugene-matatov">
            My Linked
            <i className="fab fa-linkedin"></i>
            Page
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
