import Container from '../Container'
import { FaArrowTrendUp, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import "./Footer.css"
import Heading from '../Common/Heading'
import { useThemeContext } from '../../AppContext'

const Footer = () => {
    const { isDarkMode } = useThemeContext();

    return (
        <div className={`footer ${isDarkMode && 'bg-dark-footer'}`}>
            <Container className='footer-container'>
                <div className='upper d-flex align-items-center justify-content-between py-5 border-bottom border-secondary'>
                    <Heading text={"Lets Connect"} subText={"there.."} color='#fff' />

                    <div>
                        <a href='mailto:yasirkhan8104@gmail.com?subject=We are hiring for ' target='_blank' className='button'>Hire Me <FaArrowTrendUp /> </a>
                    </div>
                </div>

                <div className='row py-5 border-bottom border-secondary'>
                    <div className='col-md-4'>
                        <div className='nav-logo'>
                            <div>YK</div> Yasir Khan
                        </div>

                        <p className='paragraph text-white mt-4 mb-2'>
                            Looking for a frontend developer to bring your ideas to life?
                             Get in touch with me.
                            Let’s create something meaningful.
                        </p>
                    </div>

                    <div className="col-md-2 text-white ps-md-5 footer-links">
                        <h5 className='mb-4 fw-bold'>Navigation</h5>

                        <div className='py-1'><a href="#service">Services</a></div>
                        <div className='py-1'><a href="#about">About Us</a></div>
                        <div className='py-1'><a href="#resume">Resume</a></div>
                        <div className='py-1'><a href="#projects">Projects</a></div>
                        <div className='py-1'><a href="#contact">Contact</a></div>
                    </div>

                    <div className="col-md-3 text-white footer-links">
                        <h5 className='mb-4 fw-bold'>Contact</h5>

                        <div className='py-1'><a href="tel:+91 9313911094">+91 9313911094</a></div>
                        <div className='py-1'><a href="mailto:yasirkhan8104@gmail.com">yasirkhan8104@gmail.com</a></div>
                        <div className='py-1'><a href="#resume">Say <b>"Hello"</b> on Whatsapp!</a></div>
                    </div>

                    <div className="col-md-3 text-white footer-links">
                        <h5 className='mb-4 fw-bold'>Stay Connected!</h5>

                        <div className='social-icons'>
                            <div className='py-1'><a href="https://www.linkedin.com/in/yasir-fazal-khan-783a62252/" target='_blank' className='social-icon'><FaLinkedin /></a></div>
                            <div className='py-1'><a href="https://github.com/projectsbyfazal" target='_blank' className='social-icon'><FaGithub /></a></div>
                            <div className='py-1'><a href="https://www.facebook.com/yasirfazal.khan.794" target='_blank' className='social-icon'><FaFacebook /></a></div>
                            <div className='py-1'><a href="https://www.instagram.com/yasirkhan_92/" target='_blank' className='social-icon'><FaInstagram /></a></div>
                        </div>
                    </div>
                </div>

                <div className='text-center text-light fw-semibold pt-4 pb-5'>
                    Created with ❤️ by <strong className='owner'>Yasir Khan</strong> | © {new Date().getFullYear()} All rights reserved.
                </div>
            </Container>
        </div>
    )
}

export default Footer
