import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currrentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description: "Full stack web developer and IT professional with 8 years’ experience seeking further opportunity. Studying software development to advance the challenges in my career. Proven decision-making with a record of procedural compliance, process management and operational skills.",
        highlights:{
            bullets: [
                "Full stack web development",
                "Interactive Front End",
                "React",
                "Database Management",
                "Quality Assurance Documentation",
                "Application Requirements and Design Specifications",
                "Agile Software Lifecycle"
            ],
            heading: "Here are a few highlights:"
        }

    }

    const renderHighlight = () => {
        return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                        <span>{value}</span>
                </div>
            ))
    }

    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Chose Me'}/>
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
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
                </div>
            </div>
        </div>
    )
}
