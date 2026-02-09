import React from 'react'

const WorkExperience = () => {

    const experiences = [
        {
            id: 1,
            role: "Frontend Developer",
            duration: "June 2023 - Present",
            company: "Zithas Technology Pvt Ltd – Vadodara",
            points: [
                "Full Time Job",
                "Designed and developed responsive user interfaces for web applications using React JS.",
                "Developed reusable components in React.js, ensuring cross-browser compatibility",
                "Implemented State Management using Redux, Redux Toolkit, Zustand and Context API.",
                "Integrated RESTful APIs using Axios/Fetch in CMS and admin dashboards for dynamic data rendering.",
                "Implemented user authentication, API integration, and third-party payment systems",
                "Implemented real-time features like notifications using WebSockets and Socket.IO in React apps",
                "Worked on enhancing existing UI components and fixing UI/UX bugs.",
                "Other useful libraries like moment, Axios, React Hook Form, react tables, tailwind css, Ant Design, etc. more..",
            ]
        },
        {
            id: 2,
            role: "Frontend Developer",
            duration: "Dec 2022 – May 2023",
            company: "Lion Fragrance – Ahmedabad",
            points: [
                "Remote Job",
                "Building responsive webpages and constructed HTML for Lion fragrance.",
                "Developed and maintained HTML Structure for better accessibility "
            ]
        }
    ]

    return (
        <div className='pb-5'>
            <h2 className='heading2 text-primary-color'>Work Experience</h2>

            {
                experiences.map((exp) => {
                    return (
                        <div className='mt-5' key={exp.id}>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h3 className='heading3 text-secondary-color mb-0'>{exp.role}</h3>
                                    <p className='paragraph text-primary-color'>{exp.company}</p>
                                </div>

                                <div>
                                    <h5 className='fw-semibold text-secondary-color'>{exp.duration}</h5>
                                </div>
                            </div>

                            <ul>
                                {
                                    exp.points.map((point) => {
                                        return (
                                            <li className='paragraph ' key={point}>
                                                {point}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WorkExperience
