import React, { useEffect, useState } from 'react'
import image1 from "../Assets/img3.jpeg"
import "./Page4.css"

function Page4() {

    const [rotate, setrotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(dets)=>{
            let mousex = dets.x;
            let mousey = dets.y;

            let deltax = window.innerWidth/2 - mousex;
            let deltay = window.innerHeight/2 - mousey;

            var angle = Math.atan2(deltay , deltax)*(180/Math.PI);
            setrotate(angle)
        })
    })

  return (
    <div className='page4' data-scroll data-scroll-speed="-0.5">
        <img src={image1} alt="" />
        <div className="page4-box">
            <div className="page4-eye">
                <div className="page4-eye-1">
                    <div className="page4-eye-line" style={{ transform: `translate(-50%,-50%)  rotate(${rotate}deg)`}}>
                        <div className="page4-eye-2"></div>
                    </div>
                </div>
            </div>
            <div className="page4-eye">
                <div className="page4-eye-1">
                    <div className="page4-eye-line" style={{ transform: `translate(-50%,-50%)  rotate(${rotate}deg)`}}>
                        <div className="page4-eye-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page4
