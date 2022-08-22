import React from 'react'
import './aboutUs.css'
import { AiOutlineArrowRight } from "react-icons/ai";
import { useParallax } from 'react-scroll-parallax'
import Button from '../button/Button'

function AboutUs() {
  const parallax = useParallax({
    speed: 100,
  });
  const parallax2 = useParallax({
    speed: -100,
  });
  const parallax3 = useParallax({
    speed: 10,
  });
  return (
    <div className="au">
      <div ref={parallax.ref} className="au-bgC1 au-bgC"></div>
      <div ref={parallax2.ref} className="au-bgC2 au-bgC"></div>
      <div className="au-wrapper">
        <div className="au-vid-wrapper">
          <div ref={parallax3.ref} className="vid-proto">PLACEHOLDER</div>
        </div>
        <div className="au-text-wrapper">
          <div className="au-text-header">
            <h1 className="au-text-header-large">About <span style={{ color: "#EA7F1E"}}>Us</span></h1>
            <h1 className="au-text-header-small">Innov8 Tech Hub</h1>
          </div>
          <div className="au-text-ps">
            <p className="au-text-p1 au-p">
            Innov8 Hub is an Innovation Startup driven organisation with a mandate to groom generations of INNOVATORS, INVENTORS and RESEARCHERS across board.
Innov8 is a focal point for Innovation Startup Incubation, Technology Transfer, Knowledge and Skill Impartation, Prototype Development and Fabrication.

            </p>
            <p className="au-text-p1 au-p">
            We strategically aid organizations and individuals seeking to transform their ideas into inventions, inventions into solutions, solutions into enterprises.
Through different programs and initiatives we bring together brilliant minds and gifted hands from across board, to whom we provide access to mentoring, expertise, enabling environment and cutting edge facilities needed to make their dreams come alive.
            </p>
          </div>
          <div className="hover-wrapper">
          <Button variant="swipeGrad pvgreen"><div className="au-text-cta">Read More <div className="au-cta-arrow"><AiOutlineArrowRight/></div></div></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs