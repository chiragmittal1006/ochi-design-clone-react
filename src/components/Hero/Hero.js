import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import "./Hero.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Hero() {

  useEffect(() => {
    gsap.fromTo(".hero-page1-content-1-img",{width:"0px"},{width:"8.5vw",duration:"0.6",delay:"0.5",scrollTrigger:{trigger:".hero-page1",start:"top 1px", end: "top 0px"}})
  }, [])
  
  return (
    <div className="main">
      <div className="hero-page1">
        <div className="hero-page1-content">
          <h1>WE CREATE</h1>
          <div className="hero-page1-content-1">
            <div className="hero-page1-content-1-img"></div>
            <h1>EYE-OPENING</h1>
          </div>
          <h1>PRESENTATIONS</h1>
        </div>
        <div className="hero-page1-foot">
          <span>For public and private companies</span>
          <span>From the first pitch to IPO</span>
          <div className="hero-page1-foot-1">
            <button>START THE PROJECT</button>
            <div className="hero-page1-foot-1-icon">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
