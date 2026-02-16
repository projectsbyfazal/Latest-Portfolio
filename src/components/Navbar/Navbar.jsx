import React, { useState } from 'react'
import "./Navbar.css"
import Container from '../Container'
import { useThemeContext } from '../../AppContext'
import { FaMoon, FaSun } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import resume from "../../assets/Images/Yasir_Resume.pdf"

const Navbar = () => {

    const { isDarkMode, setIsDarkMode } = useThemeContext();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container className={`${isDarkMode && 'bg-dark'}`}>
            <div className='py-3'></div>

            <div className='my-navbar'>

                {/* LEFT LINKS */}
                <div className={`nav-links mobile-hide`}>
                    <div><a className='nav-link active' href="#">Home</a></div>
                    <div><a className='nav-link' href="#about">About</a></div>
                    <div><a className='nav-link' href="#service">Service</a></div>
                </div>

                {/* LOGO */}
                <div className='nav-logo'>
                    <div onClick={() => setIsDarkMode(prev => !prev)}>
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </div>
                    Portfolio
                </div>

                {/* RIGHT LINKS */}
                <div className={`nav-links mobile-hide`}>
                    <div><a className='nav-link' href={resume} download>Resume</a></div>
                    <div><a className='nav-link' href="#projects">Projects</a></div>
                    <div><a className='nav-link' href="#contact">Contact</a></div>
                </div>

                {/* HAMBURGER */}
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </div>
                {/* MOBILE MENU */}
                <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                    <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#service" onClick={() => setMenuOpen(false)}>Service</a>
                    <a href={resume} download onClick={() => setMenuOpen(false)}>Resume</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </div>
            </div>

        </Container>
    )
}

export default Navbar

