import React from 'react';
import Iframe from 'react-iframe';
import aboutPick from '../../images/about-banner.jpg';

const About = () => {
    return (
        <div className="py-3 container">
            <h3 className="text-center">Want to Know About Us?</h3>
            <div className="row">
                <div className="col-md-8">
                    <h4>About Us</h4>
                    <p>What we are and our history</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, distinctio. Deleniti nulla assumenda obcaecati aut tempore consectetur tenetur, ipsam dignissimos harum delectus nesciunt iusto recusandae hic quasi totam, minus dolor.</p>
                    <hr />
                    <h4>Our Vision</h4>
                    <p>What we are and our history</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas voluptatem voluptate error magni tenetur soluta laudantium maxime dignissimos minima fugit quidem reprehenderit, sint dolores distinctio architecto exercitationem voluptates eius ut.</p>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={aboutPick} alt="about" />
                </div>
            </div>
            <br />
            <h3 className="text-center py-2 text-info">Our Location</h3>
            <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115860.91172955948!2d89.30016555076658!3d24.841520864198245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!5e0!3m2!1sen!2sbd!4v1634575712840!5m2!1sen!2sbd"
                width="100%"
                height="375px"
            ></Iframe>
        </div>
    );
};

export default About;