import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import schoolImg from '../assets/aboutUs.png';
function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="about-container about" data-aos="fade-up" id='about'>
            <div className="container">
                <div className="context">
                    <h1>About Us</h1>
                    <p data-aos="fade-up" data-aos-delay="100">
                        Nova Escuela is a forward-thinking educational platform designed to empower both students and teachers.
                        Our mission is to enhance learning outcomes through personalized insights, modern technology, and human-centered tools.
                    </p>

                    <p data-aos="fade-up" data-aos-delay="100">
                        We provide teachers with the ability to record notes, achievements, and challenges for every student.
                        Our built-in AI system then generates weekly analytics to help educators better understand each student’s progress.
                    </p>

                    <p data-aos="fade-up" data-aos-delay="100">
                        At Nova Escuela, we believe in equity, innovation, and the power of education to transform lives.
                        Whether you're a teacher, student, or parent — you're part of a movement that values learning without limits.
                    </p>
                </div>
                <div className="img-about">
                    <img src={schoolImg} alt="test" data-aos="fade-up"/>
                
                </div>

            </div>
        </section>
    );
}

export default About