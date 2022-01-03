import React from 'react';
import doctor from '../../images/doctor-choose.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap';

const WhyUs = () => {
    return (
        <>
            <div className="text-center pt-5">
                <h2>Why Choose Us?</h2>
                <p>we have best doctors</p>
            </div>
            <Container>
                <Row className='align-items-center py-4'>
                    <Col sm={12} md={6}>
                        <h2 className='text-primary'>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ex asperiores beatae rerum incidunt atque? Aliquid officiis optio, accusantium omnis exercitationem cum pariatur! Fugiat quisquam, dolores recusandae veniam nobis sunt!</p>
                        <Button variant="info">Our Doctors</Button>
                    </Col>
                    <Col sm={12} md={6}>
                        <img className='img-fluid rounded-2' src={doctor} alt="Doctor" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default WhyUs;