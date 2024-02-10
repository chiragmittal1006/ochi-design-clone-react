import React,{useState,useEffect} from 'react'
import "./page6.css"
function Page6() {

    const [rotated, setrotated] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(dets)=>{
            let mousx = dets.x;
            let mousy = dets.y;

            let deltx = window.innerWidth/2 - mousx;
            let delty = window.innerHeight/2 - mousy;

            var angled = Math.atan2(delty , deltx)*(180/Math.PI);
            setrotated(angled)
        })
    })


  return (
    <div className='page6'>
      <h1>READY <br />TO START <br />THE PROJECT?</h1>

      <div className="page6-box">
            <div className="page6-eye">
                <div className="page6-eye-1">
                    <div className="page6-eye-line" style={{ transform: `translate(-50%,-50%)  rotate(${rotated}deg)`}}>
                        <div className="page6-eye-2"></div>
                    </div>
                </div>
            </div>
            <div className="page6-eye">
                <div className="page6-eye-1">
                    <div className="page6-eye-line" style={{ transform: `translate(-50%,-50%)  rotate(${rotated}deg)`}}>
                        <div className="page6-eye-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page6
