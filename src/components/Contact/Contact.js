import { faEnvelope, faPhone, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import Iframe from 'react-iframe';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <div className='container'>
                <div className='row py-3'>
                    <div className='col-sm-12 col-md-7 col-xl-7'>
                        <h4>Give ua a Message</h4>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nameInfo">
                                <Form.Label>First Name<span className='text-secondary'>(required)</span> </Form.Label>
                                <Form.Control type="text" required placeholder="First Name" />
                                <Form.Label>Last Name<span className='text-secondary'>(required)</span> </Form.Label>
                                <Form.Control type="text" required placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address<span className='text-secondary'>(required)</span> </Form.Label>
                                <Form.Control type="email" required placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" placeholder='Type Here' rows={4} />
                            </Form.Group>
                            <button className='btn btn-primary' type='submit'>Send</button>
                        </Form>
                    </div>
                    <div className='col-sm-12 col-md-5 col-xl-5'>
                        <h4>Contact Info</h4>
                        <hr />
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faRocket} className='text-secondary inline h5'></FontAwesomeIcon>
                            <span>&nbsp; No: Doctor Bari, Gondogram, Banani, Bogura</span>
                        </div>
                        <hr />
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faPhone} className='text-secondary inline h5'></FontAwesomeIcon>
                            <span>&nbsp; Phone : <a className='text-decoration-none' href="tel:01819298991">01819298991</a> </span>
                        </div>
                        <hr />
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-secondary inline h5'></FontAwesomeIcon>
                            <span>&nbsp; Email : <a className='text-decoration-none' href="mailto:drezaulkarim123@gmail.com">drezaulkarim123@gmail.com</a> </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-5'>
                <h3 className="text-center pb-2 text-success">Our Location</h3>
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115860.91172955948!2d89.30016555076658!3d24.841520864198245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!5e0!3m2!1sen!2sbd!4v1634575712840!5m2!1sen!2sbd"
                    width="100%"
                    height="375px"
                ></Iframe>
            </div>
        </>
    );
};

export default Contact;