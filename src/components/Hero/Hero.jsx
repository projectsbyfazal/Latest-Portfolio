import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa6'
import "./Hero.css";
import { FaStar } from 'react-icons/fa';
import myImage from "../../assets/Images/yasir_khan.png";
import Container from '../Container';
import { useThemeContext } from '../../AppContext';

export function calculateExp(start = "2023-05-08") {
    const startDate = new Date(start);
    const currentDate = new Date();

    const diffInMs = currentDate - startDate;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

    // round to 1 decimal (2.5 format)
    return diffInYears.toFixed(1);
}

const Hero = () => {
    const { isDarkMode } = useThemeContext();

    return (
        <Container className={`${isDarkMode && 'bg-dark'}`}>
            <div className={`hero-section pt-4 ${isDarkMode && 'text-light'}`}>
                <div className='hero-heading mt-md-0 mt-5 pt-md-0 pt-4' data-aos="fade-up">
                    <span>Hello</span>
                    <h1>I'm <span>Yasir Khan</span>, <br /> Frontend Engineer</h1>
                </div>

                <div className='introduction' > 
                    <div className={` ${isDarkMode && 'text-light'}`} data-aos="fade-right">
                        <FaQuoteLeft className='fs-1 mb-2' />
                        <p>
                            Turning ideas into responsive web experiences. Highly Recommended
                        </p>
                    </div>

                    <section className='position-relative text-center' data-aos="fade-down">
                        <div className={`hero-image ${isDarkMode && 'bg-lightdark-orange'}`}>
                            <img src={myImage} alt="" />
                        </div>
                    </section>

                    <div className={`text-end  ${isDarkMode && 'text-light'}`} data-aos="fade-left">
                        <div className='text-warning'>
                            <span> <FaStar /> </span>
                            <span> <FaStar /> </span>
                            <span> <FaStar /> </span>
                            <span> <FaStar /> </span>
                            <span> <FaStar /> </span>
                        </div>

                        <h3 className='mb-0 mt-2'>{calculateExp()} Years</h3>
                        <p>Experience</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Hero
