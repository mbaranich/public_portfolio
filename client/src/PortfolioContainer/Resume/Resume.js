import React, {useState} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

const Resume = (props) => { 
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currrentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (props) => {
        return(
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + " - " + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
                <div className='resume-heading-link'>
                    <a style={{ cursor: 'pointer'}} href={props.link}>{props.link ? props.link : ''}</a>
                </div>
            </div>
        )
    }


    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
    ];

    const programmingSkillDetails = [
        {skill: "Javascript", ratingPercentage: 75},
        {skill: "React JS", ratingPercentage: 75},
        {skill: "Express JS", ratingPercentage: 65},
        {skill: "Node JS", ratingPercentage: 65},
        {skill: "Mongo DB", ratingPercentage: 65},
        {skill: "C#", ratingPercentage: 85},
        {skill: "ASP.Net", ratingPercentage: 85},
        {skill: "HTML", ratingPercentage: 85},
        {skill: "CSS", ratingPercentage: 85},
    ];

    const projectDetails = [
        {title: "Personal Portfolio Website", 
        duration: {fromDate: "2021", toDate: "2022"}, 
        description: "A personal portfolio website to showcase my details and skills as a developer.", 
        subHeading: "Technologies Used: ReactJS, NodeJS, Bootstrap, CSS",
        link: "https://github.com/mbaranich/public-portfolio"},

        {title: "Weather Web App", 
        duration: {fromDate: "2021", toDate: "2021"}, 
        description: "A webpage that calls an API to display the weather anywhere in the world.", 
        subHeading: "Technologies Used: JavaScript, Weatherstack API, SCSS",
        link: "https://github.com/mbaranich/Earth-Weather-App"},

        {title: "Bob's Book Store", 
        duration: {fromDate: "2020", toDate: "2020"}, 
        description: "An ECommerce Website used to buy books online.", 
        subHeading: "Technologies Used: ASP.Net, C#, XML, HTML",
        link: "Link to Github coming soon."},
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key='education'>
            <ResumeHeading
                heading={"Macomb Community College"}
                subHeading={"C# Programming with ASP .Net Certificate"}
                fromDate={"2019"}
                toDate={"2020"}
            />
            <ResumeHeading
                heading={"Macomb Community College"}
                subHeading={"Associate IT Professional with Specialty in the Microsoft Office Suite"}
                fromDate={"2015"}
                toDate={"2018"}
            />
            <ResumeHeading
                heading={"Career Preperation Center"}
                subHeading={"Computer Information Systems"}
                fromDate={"2009"}
                toDate={"2011"}
            />
            <ResumeHeading
                heading={"High School"}
                subHeading={"Sterling Heights High School"}
                fromDate={"2007"}
                toDate={"2011"}
            />
        </div>,

        // Work experience
        <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
          <ResumeHeading
            heading={"Data System Services LLC"}
            subHeading={"Software Quality Assurance Analyst"}
            fromDate={"2017"}
            toDate={"Present"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Currently working as a Software Quality Assurance Analyst.
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Focus on gathering requirements, development review, through deployment into user acceptance. Manages tickets throughout the ticket lifecycle. 
            </span>
            <br />
            <span className="resume-description-text">
               - Perform insert and delete statements completing maintenance requests.{" "}
            </span>
            <br />
            <span className="resume-description-text">
               - Identify, design and implement improvements to existing systems.
            </span>
            <br />
          </div>
        </div>
      </div>,

            // Programming Skills
            <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
          >
            {programmingSkillDetails.map((skill, index) => (
              <div className="skill-parent" key={index}>
                <div className="heading-bullet"></div>
                <span>{skill.skill}</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: skill.ratingPercentage + "%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
            ))}
          </div>,

            // Projects
            <div className='resume-screen-container' key='projects'>
                    {projectDetails.map((projectDetails, index) => (
                        <ResumeHeading
                            key={index}
                            heading={projectDetails.title}
                            subHeading={projectDetails.subHeading}
                            description={projectDetails.description}
                            fromDate={projectDetails.fromDate}
                            toDate={projectDetails.toDate}
                            link={projectDetails.link}
                        />
                    ))}
            </div>,

            // Interests
            <div className='resume-screen-container' key='interests'>
                <ResumeHeading 
                    heading='Exercise'
                    description='- Love exploring new ways to stay healthy. From running to lifting weights to adventuring to new workouts like yoga.'
                />
                <ResumeHeading 
                    heading='Cooking'
                    description='- Cooking is a great way to continue challenging yourself while promoting good dietary habits.'
                />
                <ResumeHeading 
                    heading='Learning'
                    description='- Curious individual who has a thirst for knowledge and an inquiring mind. There is never one way to do something. '
                />
            </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };

      const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              className="bullet-logo"
              src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
              alt="B"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };

      const getResumeScreens = () => {
        return (
          <div
            style={carousalOffsetStyle.style}
            className="resume-details-carousal"
          >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
      };

    return (
        <div 
            className="resume-container screen-container fade-in" 
            id={props.id || ""}
            >
                <div className="resume-content">
                    <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
                    <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                    </div>
                </div>
        </div>
  );
};

export default Resume;