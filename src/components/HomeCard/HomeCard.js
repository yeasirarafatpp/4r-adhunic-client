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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam similique dicta dolores. Vel cupiditate perspiciatis natus molestias neque.</p>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-4">
                    <FontAwesomeIcon className='h1 text-secondary' icon={faUserMd}></FontAwesomeIcon>
                    <h4 className='text-danger'>HEALTHCARE SOLUTIONS</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam similique dicta dolores. Vel cupiditate perspiciatis natus molestias neque?</p>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-4">
                    <FontAwesomeIcon className='h1 text-secondary' icon={faAmbulance}></FontAwesomeIcon>
                    <h4 className='text-primary'>24/7 AVAILABILITY</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam similique dicta dolores. Vel cupiditate perspiciatis natus molestias neque.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;