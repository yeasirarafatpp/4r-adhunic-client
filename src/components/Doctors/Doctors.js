import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import doctorImg from '../../images/doctors.jpg';
import drRezul from '../../images/dr-rezaul.jpg';

const Doctors = () => {
    const history = useHistory();
    const seeDoc = () => {
        history.push('/doctors')
    }
    return (
        <>
            <div className="text-center pt-5">
                <h2>Our Doctors</h2>
                <p>we have best doctors</p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xl-4'>
                        <Card >
                            <Card.Img variant="top" src={drRezul} />
                            <Card.Body>
                                <Card.Title>ডাঃ মোঃ রেজাউল করিম</Card.Title>
                                <Card.Text>
                                    এমএবিবিএস/এমডি <br />
                                    ডক্টর অব মেডিসিন(রাশিয়া)<br />
                                    সিসিডি(বারডেম)<br />
                                    সিসিডি(হার্ট ফাউন্ডেশন, ঢাকা, বাংলাদেশ)<br />
                                    স্পেশালিষ্ট ইন জেনারেল মেডিসিন ও ডায়াবেটিওলজিস্ট<br />
                                    বিএমডিসি রেঃজিঃ- ১৮৯৫৮
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xl-4'>
                        <Card >
                            <Card.Img variant="top" src={doctorImg} />
                            <Card.Body>
                                <Card.Title>Doctor Name</Card.Title>
                                <Card.Text>
                                    Details About Doctor
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xl-4'>
                        <Card >
                            <Card.Img variant="top" src={doctorImg} />
                            <Card.Body>
                                <Card.Title>Doctor Name</Card.Title>
                                <Card.Text>
                                    Details About Doctor
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='pt-3 text-center'>
                    <button onClick={seeDoc} className='btn btn-success'>See All Doctors</button>
                </div>
            </div>
        </>
    );
};

export default Doctors;