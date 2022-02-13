import { faAmbulance, faMedkit, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HomeCard = () => {
    return (
        <div className='container text-center pt-5'>
            <div className='row'>
                <div className="col-sm-6 col-md-4 col-xl-4">
                    <FontAwesomeIcon className='h1 text-secondary' icon={faMedkit}></FontAwesomeIcon>
                    <h4 className='text-primary'>ADVANCED TECHNOLOGY</h4>
                    <p>গ্রাম হবে শহর। তাই অজগ্রামে ডিজিটাল আধুনিক এক্স-রে, কালার ডপলার আল্ট্রাসনোগ্রাফী, ইকোকার্ডিওগ্রাম, ইসিজি প্রয়োজনীয় ডিজিটাল যন্ত্রপাতি, পর্যাপ্ত অক্সিজেন সিলিন্ডারসহ আধুনিক মানের বড় অপারেশন থিয়েটার আছে এই হাসপাতালে। </p>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-4">
                    <FontAwesomeIcon className='h1 text-secondary' icon={faUserMd}></FontAwesomeIcon>
                    <h4 className='text-danger'>HEALTHCARE SOLUTIONS</h4>
                    <p>প্রাথমিক স্বাস্থ্যসেবা ওপেন হার্ট সার্জারী ছাড়া বাকি সব ধরনের অপারেশন এই হাসপাতালে সম্ভব</p>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-4">
                    <FontAwesomeIcon className='h1 text-secondary' icon={faAmbulance}></FontAwesomeIcon>
                    <h4 className='text-primary'>24/7 AVAILABILITY</h4>
                    <p>একজন সিনিয়র কনসালট্যান্ট ডাক্তার ২৪ ঘন্টায় এই হাসপাতালে সার্ভিস প্রদান করেন। সেই সঙ্গে গর্ভবতী মায়েদের সেবার লক্ষ্যে এই হাসপাতালে ২৪ ঘন্টা আল্ট্রাসনোগ্রাম করার সুযোগ বিদ্যমান</p>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;