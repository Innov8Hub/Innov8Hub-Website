import React from 'react'
import { useEffect, useState } from 'react';
import './hero.css'
import heroMain from '../../images/hero/hero.svg'
import heroMain2 from '../../images/hero/hero2.svg'
import heroBack from '../../images/hero/heroback.svg'
import heroBack1 from '../../images/hero/heroback3.svg'
import heroBack2 from '../../images/hero/heroback2.svg'
import { useParallax } from 'react-scroll-parallax'

function Hero() {
  const [robotized , setRobotized] = useState("false");
  const handleRobot =() =>{
    setRobotized(!robotized);
  }
    const parallax = useParallax({
        speed: 10,
      });
    const parallax2 = useParallax({
        speed: -10,
      });
    const parallax3 = useParallax({
        speed: -20,
      });

    useEffect(()=>{setTimeout(()=>{setRobotized(!robotized);},5000)})

  return (
    <div className={`h ${robotized ? "" : "h-robotTime"}`} onClick={handleRobot}>
        <div ref={parallax2.ref} className="h-grid-wrapper">
            <div className="h-node-1">
              <div className={`h-node-1-text ${robotized ? "" : "moved-text"}`}> Innovation <span ref={parallax3.ref} style={{ color: "#EA7F1E"}}>Start-up</span> Hub</div>
              <div className={`h-node-1-text robot-text ${robotized ? "moved-text" : ""}`}> Robotics <span ref={parallax3.ref} style={{ color: "#EA7F1E"}}>Club</span> </div>
            </div>
        <div className="h-node-2">
          <div className="node2-text1 text-node2">Innovation | Invention | Start-up Incubation | <br />
            Technology Transfer | Research and Development |
            Prototype Development | Fabrication | Hman Capital Development|
            mentorship.
          </div>
          <div className={`node2-text2 text-node2 ${robotized ? "hidden-text2" : ""}`}>Let your kids acquire 21st century tech skills while working on fascinating projects in collaboration with other brilliant kids.
          </div>

        </div>
        </div>

        {/* <img ref={parallax.ref} src={heroBack} alt="" className="h-imgs h-img-back" /> */}
        <img ref={parallax.ref} src={heroBack2} alt="" className="h-imgs h-img-back h-img-back2"/>
        <img ref={parallax.ref} src={heroBack1} alt="" className={` h-img-back${robotized ? "" : " move-back1"}`}/>
        
        <div class="container">
  <div className={`carousel ${robotized ? "" : "robotTime"}`} >
    <div className={`item a ${robotized ? "" : "hidden"}`}>
        <img src={heroMain} alt="" className="h-imgs h-img-main" /></div>
    <div className={`item b ${robotized ? "hidden" : ""}`}><img src={heroMain2} alt="" className="h-imgs h-img-main2" /></div>
  </div>
</div>
{/* 
        <img src={heroMain} alt="" className="h-imgs h-img-main" /> */}
    </div>
  )
}

export default Hero