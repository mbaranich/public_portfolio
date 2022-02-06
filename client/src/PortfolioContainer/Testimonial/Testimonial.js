import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Testimonial.css'
import lady from '../../img/Testimonial/lady.png'
import shape from '../../img/Testimonial/shape-bg.png'
import man from '../../img/Testimonial/man.png'
import mike from '../../img/Testimonial/mike.png'

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currrentScreenFadeIn.subscribe(fadeInScreenHandler);


  const options = {
      loop: true,
      margin: 0,
      nav: true,
      animateIn: "boundeInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
          0:{
              items:1,
          },
          768:{
            items:1,
            },
            1000:{
                items:3,
            },
      }
  }

  return (
    <div>
      <ScreenHeading title={"Testimonial"} subHeading={"What They Say"} />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel 
            className="owl-carousel" 
            id="testimonial-carousel"
            {...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <i className="fa fa-quote-left" />
                      Matthew is very clear, concise
                      and communicates very well. Would recommend to any
                      company.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src={mike} alt='Picture of Person'></img>
                      <h5>Misc Coworker</h5>
                      <p>Previous Company</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <i className="fa fa-quote-left" />
                        Matt has a strong attention to detail. He is able to find bugs that have previosly been overlooked.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                  <img src={lady} alt='Picture of Person'></img>
                      <h5>Misc Coworker</h5>
                      <p>Previous Company</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <i className="fa fa-quote-left" />
                        Matth was able to pickup an existing project quickly. We needed him to learn an app and he was willing and eager to do so!
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                  <img src={man} alt='Picture of Person'></img>
                      <h5>Misc Coworker</h5>
                      <p>Previous Company</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Photo not responding" />
      </div>
    </div>
  );
}
