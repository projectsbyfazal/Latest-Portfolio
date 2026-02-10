import React, { use, useEffect, useState } from 'react'
import Container from '../Container'
import "./Portfolio.css"
import Heading from '../Common/Heading'
import { FaArrowRight } from 'react-icons/fa'
import { useThemeContext } from '../../AppContext'
import minor_1 from "../../assets/Images/minor/minor_1.png"
import minor_2 from "../../assets/Images/minor/minor_2.png"
import minor_3 from "../../assets/Images/minor/minor_3.png"
import minor_4 from "../../assets/Images/minor/minor_4.png"
import minor_5 from "../../assets/Images/minor/minor_5.png"
import minor_6 from "../../assets/Images/minor/minor_6.png"
import minor_7 from "../../assets/Images/minor/minor_7.png"
import minor_8 from "../../assets/Images/minor/minor_8.png"
import static_1 from "../../assets/Images/static/static_1.png"
import static_2 from "../../assets/Images/static/static_2.png"
import static_3 from "../../assets/Images/static/static_3.png"
import static_4 from "../../assets/Images/static/static_4.png"
import static_5 from "../../assets/Images/static/static_5.png"
import static_6 from "../../assets/Images/static/static_6.png"
import static_7 from "../../assets/Images/static/static_7.png"
import static_8 from "../../assets/Images/static/static_8.png"

import dashboard_1 from "../../assets/Images/dashboard/dashboard_1.png"


const projects = [
    {
        project_title: "Youtube Clone App",
        image: minor_8,
        type: 1,
        link: "https://fazal-youtube-clone.netlify.app/",
        description: "A YouTube clone app with a familiar interface, category-wise video browsing, search functionality, and smooth video playback. "
    },
    {
        project_title: "Translation App",
        image: minor_1,
        type: 1,
        link: "https://projectsbyfazal.github.io/translationapp/",
        description: "A simple translation app that converts text from one language to another using a clean and user-friendly interface."
    },
    {
        project_title: "Dictionary App",
        image: minor_2,
        type: 1,
        link: "https://projectsbyfazal.github.io/dictionaryapp/",
        description: "A dictionary app that allows users to search words and view their meanings with an easy and responsive UI."
    },
    {
        project_title: "Weather App",
        image: minor_3,
        type: 1,
        link: "https://projectsbyfazal.github.io/weatherapp/",
        description: "A weather application that shows real-time weather details such as temperature, condition, and location-based updates."
    },
    {
        project_title: "Note Taking App",
        image: minor_4,
        type: 1,
        link: "https://projectsbyfazal.github.io/notesapp/",
        description: "A note-taking app to add, edit, and manage daily tasks and notes, with the ability to mark items as completed."
    },
    {
        project_title: "Dynamic Image Gallery",
        image: minor_5,
        type: 1,
        link: "https://fazal-galary.netlify.app/",
        description: "Dynamic image gallery that provides images getting through unsplash API and implemented search feature two findout relevant images and download"
    },
    {
        project_title: "Basic Code Editor",
        image: minor_6,
        type: 1,
        link: "https://basic-code-editor.netlify.app/",
        description: "A basic online code editor for writing and previewing HTML, CSS, and JavaScript in real time."
    },
    {
        project_title: "QR Code Generator",
        image: minor_7,
        type: 1,
        link: "https://projectsbyfazal.github.io/qrcodegeneratorapp/",
        description: "A QR code generator that creates QR codes instantly from text or links with a simple and clean interface."
    },

    {
        project_title: "Addon Techno - Solutions",
        image: static_1,
        type: 2,
        link: "https://addontechno.com/",
        description: "A business website designed for a security and surveillance solutions provider, presenting their services, products, and industry expertise with a modern and professional interface."
    },
    {
        project_title: "Propusers - Real Estate",
        image: static_4,
        type: 2,
        link: "https://www.propusers.com/",
        description: "A real estate listing platform with property search, filters, and detailed views."
    },
    {
        project_title: "Plan4ai - Consulting Website",
        image: static_7,
        type: 2,
        link: "https://www.plan4ai.com/",
        description: ""
    },
    {
        project_title: "Precision Driving School",
        image: static_8,
        type: 2,
        link: "https://www.precisiondriving.uk/",
        description: ""
    },
    {
        project_title: "RHCare Support",
        image: static_2,
        type: 2,
        link: "https://ztpl.net/rhcare/",
        description: ""
    },
    {
        project_title: "Business Website",
        image: static_3,
        type: 2,
        link: "https://digitalbusinessbyfazal.netlify.app/",
        description: "A Simple Static website that presenting their services, products, and industry expertise with a modern and professional interface."
    },
    {
        project_title: "Educational Website",
        image: static_5,
        type: 2,
        link: "https://universitywebsitebyfazal.netlify.app/",
        description: "A responsive educational website for a college, providing easy access to academic programs, facilities, announcements, and institutional information."
    },
    {
        project_title: "Hospital Website",
        image: static_6,
        type: 2,
        link: "https://projectsbyfazal.github.io/hospitalwebsite/website.html",
        description: "A responsive hospital website displaying services, departments, doctors, and contact information in a clear layout."
    },
    {
        project_title: "Peacock Accountants Limited",
        image: dashboard_1,
        type: 3,
        link: "https://demobms.peacockac.com/",
        description: "A dashboard which helps manage the overall business, including employees, clients, and the services they provide, and also automates tasks for employees with proper timesheets."
    },
];

const tabs = ["All", "Minor Projects", "Websites", "Dashboards"]

const Portfolio = () => {

    const { isDarkMode } = useThemeContext();

    const [currentItems, setCurrentItems] = useState([]);
    const [type, setType] = useState(1);

    useEffect(() => {
        if (type !== 0)
            setCurrentItems(projects.filter((item) => item.type === type))
        else
            setCurrentItems(projects)
    }, [type])

    return (
        <Container className={`py-5 portfolio-section ${isDarkMode && 'bg-dark'}`}>
            <div className='py-4' id='projects'>
                <div className='text-center'>
                    <Heading text={"Some of"} subText={"My Work"} color={`${isDarkMode ? '#fff' : '#333'}`} />
                </div>

                <div className='p-tabs mt-4'>
                    {
                        tabs.map((tab, index) => (
                            <div key={tab} onClick={() => setType(index)} className={`p-tab-item ${isDarkMode && 'dark-p-tab-item'} ${type === index && 'active'} `}>{tab}</div>
                        ))
                    }
                </div>

                <div className='p-cards mt-5'>
                    {
                        currentItems.map((item) => {
                            return (
                                <div key={item.project_title} className='p-card'>
                                    <img src={item.image} alt="" loading='lazy' />

                                    <div className='content'>
                                        <h4>{item.project_title}</h4>
                                        <p className='mb-0'>
                                            {item.description}
                                        </p>
                                    </div>
                                    <a href={item.link} target='_blank' className='p-link'>
                                        <FaArrowRight />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}

export default Portfolio
