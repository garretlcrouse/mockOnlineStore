import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container>
      <Row>
        <Col>
        <img src="https://i.pinimg.com/originals/3c/8e/fe/3c8efe43949e95915a7a6b51bd526134.jpg" className="img-fluid"/>
        </Col>
        <Col><strong>Warthogs Wizarding School Supply Co.</strong> is the primary shop devoted to the dark arts, which sells and maintains several cursed objects, magical cabinets, glow-in-the-dark hands, and necklaces. <br></br><strong>Caution:</strong>Untoward and sometimes dangerous individuals loiter in the area and conduct informal, dark business.</Col>
      </Row>
    </Container>
  );
}


export default About;