import { faEnvelope, faPhone, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import Iframe from 'react-iframe';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ql2d568', 'template_376ntrc', form.current, 'user_jKTnLgZg7n0kHPzmLnlcQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <>
            <div className='container'>
                <div className='row py-3'>
                    <div className='col-sm-12 col-md-7 col-xl-7'>
                        <h4>Give ua a Message</h4>
                        <Form ref={form} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nameInfo">
                                <Form.Label>First Name<span className='text-secondary'>(required)</span> </Form.Label>
                                <Form.Control type="text" name="user_first_name" required placeholder="First Name" />
                                <Form.Label>Last Name<span className='text-secondary'>(required)</span> </Form.Label>
                                <Form.Control type="text" name="user_last_name" required placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address<span className='text-secondary'>(required)</span> </Form.Label>
                                <Form.Control type="email" name="user_email" required placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" name="user_message" placeholder='Type Here' rows={4} />
                            </Form.Group>
                            <button className='btn btn-primary' type='submit'>Send</button>
                        </Form>
                    </div>
                    <div className='col-sm-12 col-md-5 col-xl-5'>
                        <h4>Contact Info</h4>
                        <hr />
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faRocket} className='text-secondary inline h5'></FontAwesomeIcon>
                            <span>&nbsp; Daktar Bari, Gondogram, Banani, Bogura</span>
                        </div>
                        <hr />
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faPhone} className='text-secondary inline h5'></FontAwesomeIcon>
                            <span>&nbsp; Phone : &nbsp;
                                <a className='text-decoration-none' href="tel:01979298992">01979-298992</a>, &nbsp;
                                <a className='text-decoration-none' href="tel:01971298994">01971-298994</a>, &nbsp;
                                <a className='text-decoration-none' href="tel:01819298991">01819-298991</a>
                            </span>
                        </div>
                        <hr />
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-secondary inline h5'></FontAwesomeIcon>
                            <div>
                                <span>&nbsp; Email : <a className='text-decoration-none' href="mailto:drezaulkarim123@gmail.com">drezaulkarim123@gmail.com</a> </span>
                                <br />
                                <span>&nbsp; Email : <a className='text-decoration-none' href="mailto:drezaulkarim@yahoo.com">drezaulkarim@yahoo.com</a> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-5'>
                <h3 className="text-center pb-2 text-success">Our Location</h3>
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.4762370846975!2d89.37467141431901!3d24.813382253255327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc53f62ac0cf9f%3A0x187d0a844a7cef1d!2s4R%20Adhunik%20Hospital!5e0!3m2!1sen!2sbd!4v1643534456806!5m2!1sen!2sbd"
                    width="100%"
                    height="375px"
                ></Iframe>
            </div>
        </>
    );
};

export default Contact;