import React from "react"
import "./SkillsTools.css"
import html from "../../assets/Images/html.png"
import css from "../../assets/Images/css.png"
import js from "../../assets/Images/js.png"
import react from "../../assets/Images/react.png"
import bootstarps from "../../assets/Images/bootstrap.png"
import tailwind from "../../assets/Images/tailwind.png"
import nextjs from "../../assets/Images/nextjs.png"
import npm from "../../assets/Images/npm.png"
import redux from "../../assets/Images/redux.png"
import zustand from "../../assets/Images/zustand.png"
import github from "../../assets/Images/github.png"
import typescript from "../../assets/Images/typescript.png"
import Heading from "../Common/Heading"
import Container from "../Container"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { useThemeContext } from "../../AppContext"

const SkillsTools = () => {
    const { isDarkMode } = useThemeContext();

    const skills = [
        { name: "html", image: html },
        { name: "css", image: css },
        { name: "js", image: js },
        { name: "typescript", image: typescript },
        { name: "react", image: react },
        { name: "nextjs", image: nextjs },
        { name: "redux", image: redux },
        { name: "zustand", image: zustand },
        { name: "bootstarp", image: bootstarps },
        { name: "tailwind", image: tailwind },
        { name: "npm", image: npm },
        { name: "github", image: github },
    ]

    return (
        <div className='text-center'>
            <Container className={`skill-box ${isDarkMode && 'bg-dark-skill-box'} py-5`}>
                <Heading text={"My"} subText={"Skills & Tools"} color={`${isDarkMode ? '#fff' : '#333'} `} />

                <div className="skill-container pt-5 mb-4">
                    <div>Responsive Web Design</div>
                    <div>Frontend Libraries</div>
                    <div>Component-Based Architecture</div>
                    <div>Reusable UI Components</div>
                    <div>Package Manager (npm, yarn)</div>
                    <div>State Management </div>
                    <div>Restfull API Integration</div>
                    <div>Authentication (JWT / OAuth)</div>
                    <div>Source code organization</div>
                    <div>Cross-Browser Compatibility</div>
                    <div>Performance Optimization</div>
                    <div>Version Control</div>
                </div>
            </Container>

            <div className="tools-container">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView="auto"
                    spaceBetween={60}
                    loop={true}
                    freeMode={{
                        enabled: true,
                        momentum: false,
                    }}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    allowTouchMove={false}
                    watchSlidesProgress={true} // 👈 IMPORTANT
                    className="marquee-swiper"
                >
                    {skills.map((skill, index) => (
                        <SwiperSlide key={`${skill.name}-${index}`} style={{ width: "auto" }}>
                            <div className="skill-item">
                                <img src={skill.image} alt={skill.name} />
                                <div>{skill.name}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default SkillsTools
