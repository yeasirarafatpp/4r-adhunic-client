import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeCard from '../HomeCard/HomeCard';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <WhyUs></WhyUs>
            <HomeCard></HomeCard>
            <Doctors></Doctors>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;