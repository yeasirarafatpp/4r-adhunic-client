import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../src/images/banner.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner}
                    alt="Second slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner}
                    alt="Third slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;