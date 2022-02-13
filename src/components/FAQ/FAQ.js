import React from 'react';
import { Accordion } from 'react-bootstrap';
import docIls from '../../images/doc-ils.jpg';

const FAQ = () => {
    return (
        <div className='container'>
            <div className='row align-items-center py-4'>
                <div className="col-sm-12 col-md-6 col-xl-6">
                    <h1>FAQ</h1>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>কি কি অপারেশন হয় আপনাদের হাসপাতালে? </Accordion.Header>
                            <Accordion.Body>
                                ওপেন হার্ট অপারেশন ছাড়া বাকি সব ধরনের অপারেশন যেমন সিজার, এপেনডিক্স, টনসিল, হার্নিয়া, পিত্তথলির পাথর, কিডনির পাথর অপারেশন, জরায়ুর অপারেশন ইত্যাদি
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>কি কি ধরনের পরীক্ষা হয়?</Accordion.Header>
                            <Accordion.Body>
                                এখানে সব ধরনের পরীক্ষা হয়।
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>সিজারে কত টাকা লাগে এই হাসপাতালে?</Accordion.Header>
                            <Accordion.Body>
                                গরীব, অসহায়, স্বল্প আয়ের গর্ভবতীদের জন্য মাত্র ৭৭০০ টাকায়। প্যাকেজের আওতায়।
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>সব সময় ডাক্তার পাওয়া যায়?</Accordion.Header>
                            <Accordion.Body>
                                হ্যা সব সময় এই হাসপাতালে একজন সিনিয়র কনসালট্যান্ট ডাক্তার থাকেন। ২৪ ঘন্টা।
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>হাসপাতালের পরিবেশ কেমন?</Accordion.Header>
                            <Accordion.Body>
                                বগুড়ার অন্যসব বেসরকারি হাসপাতালের চেয়ে এই হাসপাতাল গন্ধহীন, মনোরম পরিবেশ, ঝকঝকে পরিষ্কার ও পরিচ্ছন্ন। প্রত্যেক রোগীর জন্য আলাদা পরিষ্কার টয়লেট ও গরম পানির ব্যবস্থা যা বগুড়ার অন্য কোন হাসপাতালে নেই।
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-6">
                    <img className='img-fluid rounded-2' src={docIls} alt="Doctor" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;