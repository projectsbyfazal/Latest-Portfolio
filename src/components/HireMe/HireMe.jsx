import React from 'react'
import "./HireMe.css"
import Container from '../Container'
import Heading from '../Common/Heading'
import MyImage from "../../assets/Images/yasir_khan.png"
import { FaDownload } from 'react-icons/fa'
import { useThemeContext } from '../../AppContext'
import { calculateExp } from '../Hero/Hero'
import resume from "../../assets/Images/Yasir_Resume.pdf"

const experiences = [
    {
        company: "Zithas Technologies, Vadodara ",
        duration: "June 2023 - Present",
        role: "Frontend Developer - Full Time",
        skills: "React Js, Next Js, HTML, CSS, Javascript, Bootstarp, Tailwind Css, Redux toolkit, Github.",
        description: `I am a Frontend Developer with ${calculateExp()} years of experience in building modern and responsive web applications using JavaScript and React.js. I focused and responsible for creating clean user interfaces, smooth user experiences, and well-structured code.`
    },
    {
        company: "Lion Fragrance, Ahmedabad ",
        duration: "Dec 2022 - May 2023",
        role: "Frontend Developer - Remote",
        skills: "HTML, CSS, Javascript, Bootstarp, Tailwind Css, Redux, Git",
        description: "I was responsible for constructing web interfaces using frontend technologies and worked on ecommerce website for their product."
    }
]

const HireMe = () => {
    const { isDarkMode } = useThemeContext();

    return (
        <Container className={`hire-section ${isDarkMode && 'bg-dark-hire-section'} py-5`}>
            <div className='mb-3 px-md-5 experience'>
                <div className={`text-center mb-5 mt-md-4`}>
                    <Heading text={"My"} subText={"Work Experience"} color={`${isDarkMode ? '#fff' : '#333'}`} />
                </div>

                {
                    experiences.map(exp => (
                        <div className='work-experience' key={exp.company}>
                            <div >
                                <h4 className={`mb-1 fw-semibold text-${isDarkMode ? 'white' : 'dark'}`}>{exp.company}</h4>
                                <p className='paragraph fs-5 text-secondary mb-0'> {exp.duration} </p>
                            </div>

                            <div >
                                <h4 className={`mb-1 fw-semibold text-${isDarkMode ? 'white' : 'dark'}`}>{exp.role}</h4>
                                <p className={`text-${isDarkMode ? 'light' : 'dark'} `} style={{ fontSize: '13px' }}>{exp.skills}</p>
                                <p className={`paragraph text-${isDarkMode ? 'light' : 'dark'} mb-0`}> {exp.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div id='about' className='row justify-content-around align-items-center py-md-5'>
                <div className="col-md-4">
                    <div className={`hire-image ${isDarkMode && 'bg-lightdark-orange'}`}>
                        <img src={MyImage} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <Heading text={"Why"} subText={"Hire Me?"} color={`${isDarkMode ? '#fff' : '#333'}`} />
                        <div className={`paragraph text-${isDarkMode ? 'light' : 'dark'} mt-2`}>
                            I have worked on 20+ projects, including websites, dashboards, and web applications. I understand how to turn designs into working products, fix UI issues efficiently, and improve performance. I communicate clearly, meet deadlines, and always aim to deliver quality work.
                        </div>

                        <div className='row mt-4 mb-5'>
                            <div className='col-6'>
                                <h3 className={`mb-1 fw-semibold text-${isDarkMode ? 'white' : 'dark'}`}>{calculateExp()} years</h3>
                                <p className={`paragraph text-${isDarkMode ? 'light' : 'dark'} mb-0`}>Work Experience</p>
                            </div>
                            <div className='col-6'>
                                <h3 className={`mb-1 fw-semibold text-${isDarkMode ? 'white' : 'dark'}`}>20+</h3>
                                <p className={`paragraph text-${isDarkMode ? 'light' : 'dark'} mb-0`}>Project Complete</p>
                            </div>
                        </div>

                        <div>
                            <a href={resume} className='button' download > Download CV <FaDownload /> </a>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default HireMe
