import React from 'react'
import "./Navbar.css"
import Container from '../Container'
import { useThemeContext } from '../../AppContext'
import { FaMoon, FaSun } from 'react-icons/fa'
import resume from "../../assets/Images/Yasir_Resume.pdf"
const Navbar = () => {

    const { isDarkMode, setIsDarkMode } = useThemeContext();

    return (
        <Container className={`${isDarkMode && 'bg-dark'}`}>
            <div className='py-3'></div>
            <div className='my-navbar '>
                <div className='nav-links'>
                    <div><a className='nav-link active' href="#">Home</a></div>
                    <div><a className='nav-link' href="#about">About</a></div>
                    <div><a className='nav-link' href="#service">Service</a></div>
                </div>
                <div>
                    <div className='nav-logo'>
                        <div onClick={() => setIsDarkMode(prev => !prev)}> {isDarkMode ? <FaSun /> : <FaMoon />} </div> Portfolio
                    </div>
                </div>
                <div className='nav-links'>
                    <div><a className='nav-link' href={resume} download>Resume</a></div>
                    <div><a className='nav-link' href="#projects">Projects</a></div>
                    <div><a className='nav-link' href="#contact">Contact</a></div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar
