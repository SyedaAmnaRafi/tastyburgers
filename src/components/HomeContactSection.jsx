import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
function HomeContactSection() {
  return (
    <section className="contact-section">
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                <h4>We Guarantee</h4>
                <h2>30 Minutes Delivery!</h2>
                <p>Craving something delicious? We’ve got you covered with our 30-minute delivery guarantee! At Top Burgers, we prioritize your time and satisfaction, ensuring your favorite meals are prepared fresh and delivered hot to your doorstep in no time.</p>
                <Link to='/' className="btn btn-red rounded-0">
                Call: 999 888 777
                </Link>
                </Col>
            </Row>
        </Container>
    </section>
   
  )
}

export default HomeContactSection