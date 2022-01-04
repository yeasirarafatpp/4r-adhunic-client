import React from 'react';
import { Card } from 'react-bootstrap';
import service from '../../images/service.jpg'

const Service = () => {
    return (
        <>
            <div className="text-center pt-2">
                <h2>Our Services</h2>
                <p>we provide best service</p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xl-4'>
                        <Card>
                            <Card.Img variant="top" src={service} />
                            <Card.Body>
                                <Card.Title>Service Name</Card.Title>
                                <Card.Text>
                                    Details About Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xl-4'>
                        <Card >
                            <Card.Img variant="top" src={service} />
                            <Card.Body>
                                <Card.Title>Service Name</Card.Title>
                                <Card.Text>
                                    Details About Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xl-4'>
                        <Card >
                            <Card.Img variant="top" src={service} />
                            <Card.Body>
                                <Card.Title>Service Name</Card.Title>
                                <Card.Text>
                                    Details About Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xl-4'>
                        <Card>
                            <Card.Img variant="top" src={service} />
                            <Card.Body>
                                <Card.Title>Service Name</Card.Title>
                                <Card.Text>
                                    Details About Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xl-4'>
                        <Card >
                            <Card.Img variant="top" src={service} />
                            <Card.Body>
                                <Card.Title>Service Name</Card.Title>
                                <Card.Text>
                                    Details About Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xl-4'>
                        <Card >
                            <Card.Img variant="top" src={service} />
                            <Card.Body>
                                <Card.Title>Service Name</Card.Title>
                                <Card.Text>
                                    Details About Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;