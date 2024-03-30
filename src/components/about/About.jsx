import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import AboutBox from './AboutBox';

const About = () => {
    const resumeUrl = 'https://imakshaysoni.github.io/resume/';
    const downloadResume = async () => {
        window.open(resumeUrl, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Akshay, and I'm based in Pune, India. I studied at Lakshmi Narain College Of Technology, where I completed my bachloe's degree in Software Development.<br /><br />
                            Fastforward to today, and I can honestly say it's been a beautiful journery and I hope to grow even further as Software Engineer. My current focus these days
                            is on expanidng my knowlege on designing complex, distributed system by building more projects that I can add on here, as well as being a great team player at my current role.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>Python</li>
                            <li>FastApi</li>
                            <li>Amazon Web Services</li>
                            <li>Databricks</li>
                            <li>Postgres SQL</li>
                            <li>DevOps</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Checkout my CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About