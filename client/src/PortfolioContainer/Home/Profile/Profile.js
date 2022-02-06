import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
import ScrollService from '../../../utilities/ScrollService';


export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='cols'>
                    <div className='cols-icon'>
                        <a href='https://www.linkedin.com/in/matthew-baranich-039543123/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/mbaranich'>
                            <i className='fa fa-github-square'></i>
                        </a>
                    </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Matt</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                    loop={Infinity}
                                    steps={[
                                        "Experienced QA Analyst 😊",
                                        1000,
                                        "Full Stack Developer 😁",
                                        1000,
                                        "Cross Platform 😎",
                                        1000,
                                        "ReactJS Dev 🤓",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Builds applications with front and back end operation.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}
                            Hire Me {""}
                        </button>
                        <a href='MatthewBaranichResume.pdf' download='Matthew Baranich Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    )
}
