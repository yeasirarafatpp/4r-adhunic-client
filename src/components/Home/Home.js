import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import FAQ from '../FAQ/FAQ';
import HomeCard from '../HomeCard/HomeCard';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyUs></WhyUs>
            <HomeCard></HomeCard>
            <Doctors></Doctors>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;