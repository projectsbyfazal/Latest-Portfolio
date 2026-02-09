import React from 'react'
import "./Services.css"
import Container from '../Container'
import Heading from '../Common/Heading'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { useThemeContext } from '../../AppContext';

import serviceImage1 from "../../assets/Images/static-service.png"
import serviceImage2 from "../../assets/Images/dynamic-service.png"
import serviceImage3 from "../../assets/Images/dashboard-service.png"
import serviceImage4 from "../../assets/Images/mobile-service.png"

const Services = () => {
    const { isDarkMode } = useThemeContext();

    return (
        <section className={`${isDarkMode && 'bg-dark'}`} id='service'>
            <Container className='service-section py-5'>
                <div className='d-md-flex align-items-center justify-content-between s-heading mb-5 mt-4'>
                    <Heading text={"My"} subText={"Services"} color='#fff' />
                    <div className='paragraph'>
                        I build modern, responsive, and easy-to-use websites that help businesses and individuals grow online.
                    </div>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    loop={true}                       // infinite loop
                    autoplay={{
                        delay: 2500,                  // 2.5 seconds
                        disableOnInteraction: false,  // keep autoplay after swipe
                        pauseOnMouseEnter: true,      // optional (nice UX)
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="services-swiper pt-2"
                >
                    <SwiperSlide >
                        <div className='service-card'>
                            <div className='service-title'>
                                <h3 className='px-4 mb-0'>Static Websites</h3>
                            </div>
                            <div className='p-4 image'>
                                <img src={serviceImage1} alt="" className='w-100' />
                                <div className='img-content p-4'>
                                    I create fast-loading static websites with clean layouts and responsive design.
                                    These websites are ideal for portfolios, landing pages, and business profiles where speed, SEO, and simplicity matter the most.
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='service-card'>
                            <div className='service-title'>
                                <h3 className='px-4 mb-0'>Dynamic Websites</h3>
                            </div>
                            <div className='p-4 image'>
                                <img src={serviceImage2} alt="" className='w-100' />
                                <div className='img-content p-4'>
                                    I build dynamic websites with interactive features and real-time content updates.
                                    These sites support forms, user interactions, and API integrations, making them suitable for blogs, business platforms, and custom web applications.
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-card'>
                            <div className='service-title'>
                                <h3 className='px-4 mb-0'>Dashboards & CMS</h3>
                            </div>
                            <div className='p-4 image'>
                                <img src={serviceImage3} alt="" className='w-100' />
                                <div className='img-content p-4'>
                                    I develop easy-to-use dashboards and content management systems with clean UI.
                                    These dashboards help manage data, users, and content efficiently, while keeping the interface simple and intuitive.
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-card'>
                            <div className='service-title'>
                                <h3 className='px-4 mb-0'>Mobile Applications</h3>
                            </div>
                            <div className='p-4 image'>
                                <img src={serviceImage4} alt="" className='w-100' />
                                <div className='img-content p-4'>
                                    I design and build modern mobile applications with a strong focus on UI and user experience.
                                    The apps are responsive, smooth, and optimized for different screen sizes, ensuring consistent performance and usability across devices.
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* <div className='services'>
                <div className='service-card'>
                    <h3 className='py-4 px-4 pt-5'>Portfolio Websites</h3>
                </div>
                <div className='service-card'>
                    <h3 className='py-4 px-4 pt-5'>Admin Panels</h3>

                </div>
                <div className='service-card'>
                    <h3 className='py-4 px-4 pt-5'>Ecommerce Websites</h3>

                </div>
                <div className='service-card'>
                    <h3 className='py-4 px-4 pt-5'>Landing Pages</h3>

                </div>
            </div> */}
            </Container>
        </section>
    )
}

export default Services
