import React from 'react';
import doctor from '../../images/doctor-choose.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const WhyUs = () => {
    const history = useHistory();
    const seeADoc = () => {
        history.push('/doctors')
    }
    return (
        <>
            <div className="text-center pt-5">
                <h2>Why Choose Us?</h2>
                <p>আধুনিকের ছোয়া <br /> ফোর আর আধুনিক হাসপাতাল</p>
            </div>
            <Container>
                <Row className='align-items-center py-4'>
                    <Col sm={12} md={6}>
                        <h2 className='text-primary'>ইহা হাসপাতাল নাহ। ইহা একটা বাড়ী</h2>
                        <p>ফোর আর আধুনিক হাসপাতাল- একটি বাড়ী, এখানে বাড়ীর মত যত্ন নেওয়া হয় রোগীদের। ইহা একটি ব্যতিক্রম সামাজিক মুনাফাহীন হাসপাতাল। শিশু ও মৃত্যুহার কমানো এই হাসপাতালের মূল লক্ষ্য।</p>
                        <Button onClick={seeADoc} variant="info">Our Doctors</Button>
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