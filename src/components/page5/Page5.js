import React from "react";
import "./page5.css";
import { GoDotFill } from "react-icons/go";
import image1 from "../Assets/img4.png";
import image2 from "../Assets/img5.jpeg";
import image3 from "../Assets/img6.jpeg";
import image4 from "../Assets/img7.png";
import image5 from "../Assets/imagex.svg"
import { FaStar } from "react-icons/fa";

function Page5() {
  return (
    <div className="page5">
      <div className="page5-c1">
        <h1>Featured projects</h1>
      </div>
      <div className="page5-c2">
        <div className="page5-c2-box">
          <p>
            <GoDotFill />
            &nbsp;FYDE
          </p>
          <div className="page5-c2-box-img">
            <img src={image1} alt="" />
          </div>
          <div className="page5-c2-box-button">
            <button>AUDIT</button>
            <button>COPYWRITING</button>
            <button>SALES DECK</button>
            <button>SLIDES DESIGN</button>
          </div>
        </div>
        <div className="page5-c2-box">
          <p>
            <GoDotFill />
            &nbsp;VISE
          </p>
          <div className="page5-c2-box-img">
            <img src={image2} alt="" />
          </div>
          <div className="page5-c2-box-button">
            <button>AGENCY</button>
            <button>COMPANY PRESENTATION</button>
          </div>
        </div>
        <div className="page5-c2-box">
          <p>
            <GoDotFill />
            &nbsp;TRAWA
          </p>
          <div className="page5-c2-box-img">
            <img src={image3} alt="" />
          </div>
          <div className="page5-c2-box-button">
            <button>BRAND IDENTITY</button>
            <button>DESIGN RESEARCH</button>
            <button>INVESTOR DECK</button>
          </div>
        </div>
        <div className="page5-c2-box">
          <p>
            <GoDotFill />
            &nbsp;PREMIUM BLEND
          </p>
          <div className="page5-c2-box-img">
            <img src={image4} alt="" />
          </div>
          <div className="page5-c2-box-button">
            <button>BRANDED TEMPLATE</button>
          </div>
        </div>
      </div>
      <div className="page5-c3">
        <button>
          VIEW ALL CASE STUDIES
          <GoDotFill className="page5-c3-icon" />
        </button>
      </div>
      <div className="page5-c4">
        <div className="page5-c4-left">
          <h1>OCHI</h1>
          <button>2019-2022</button>
        </div>
        <div className="page5-c4-right">
          <div className="page5-c4-right-1">
            <h1>Clutch</h1>
            <button>RATING 5.0 ON CLUTCH</button>
            <span>
              <FaStar className="page5-c4-right-1-icon" />
              <FaStar className="page5-c4-right-1-icon" />
              <FaStar className="page5-c4-right-1-icon" />
              <FaStar className="page5-c4-right-1-icon" />
              <FaStar className="page5-c4-right-1-icon" />
            </span>
          </div>
          <div className="page5-c4-right-1">
            <img src={image5} alt="" />
            <button>BUISNESS BOOTCAMP ALUMNI</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page5;
