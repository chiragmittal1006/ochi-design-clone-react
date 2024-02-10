import React, {useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
// import image1 from "../Assets/img2.jpeg"
import "./page3.css";

function Page3() {
  const [scrollSpeed, setScrollSpeed] = useState(0.4);
  useEffect(() => {
    function updateScrollSpeed() {
      const screenWidth = window.innerWidth;
      let newScrollSpeed = -0.3;
      if (screenWidth >= 450 && screenWidth <=850) {
        newScrollSpeed = 0.4;
      } else if (screenWidth >= 0 && screenWidth <= 450) {
        newScrollSpeed = 0.5;
      }
      setScrollSpeed(newScrollSpeed);
    }
    updateScrollSpeed();
    window.addEventListener('resize', updateScrollSpeed);

    return () => {
      window.removeEventListener('resize', updateScrollSpeed);
    };
  }, []);

    const handleMouseEnter = () => {
        document.querySelector(".page3-content3-right").style.transform = "scale(0.95)";
      };
    const handleMouseleave = () => {
        document.querySelector(".page3-content3-right").style.transform = "scale(1)";
      };
  return (
    <div data-scroll data-scroll-section data-scroll-speed={scrollSpeed} className="page3">
      <div className="page3-content1">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to <span>raise funds</span>, <span>sell products</span>,{" "}
        <span>explain complex ideas</span>, and <span>hire great people</span>.
      </div>
      <div className="page3-content2">
        <div className="page3-content2-left">What you can expect:</div>
        <div className="page3-content2-right">
          <div className="page3-content2-right-1">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="page3-content2-right-2">
            <span>instagram</span>
            <span>behance</span>
            <span>facebook</span>
            <span>linkedin</span>
          </div>
        </div>
      </div>
      <div className="page3-content3">
        <div className="page3-content3-left">
            <h1>Our approach:</h1>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}>Read more&nbsp;&nbsp;<GoDotFill /></button>
        </div>
        <div className="page3-content3-right">
            {/* <img src={image1} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Page3;
