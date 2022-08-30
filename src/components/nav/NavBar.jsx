import React, { useEffect, useRef } from 'react';
import './nav.css';
import innov8Logo from '../../images/LOGO.svg';
import {Parallax} from 'react-scroll-parallax';
import RotLogo from '../rotLogo/RotLogo';
import Button from '../button/Button';
import {AiOutlineMenu} from "react-icons/ai";
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'

function NavBar() {
  const check = useRef();
  useEffect(()=>{
    var styles = window.getComputedStyle(check.current,':before')
    var content = styles['content'];
    console.log(content);
  })
  const undo = () => {
    document.getElementById("checkbox").checked = false;
    
  }
  
  return (
    <div className="n">
        <div className="n-logo-wrapper">
        <RotLogo/>
        </div>
        <ul className="n-links">
            <li className="n-link"><a href='#'><Button variant="swipeGrad lightgreen">Home</Button></a></li>
            <li className="n-link"><a href='#'><Button variant="swipeGrad lightgreen">Innov8Learn</Button></a></li>
            <li className="n-link"><a href='#programs'><Button variant="swipeGrad lightgreen">Programs</Button></a></li>
            <li className="n-link"><a href='#'><Button variant="swipeGrad lightgreen">Gallery</Button></a></li>
            <li className="n-link"><a href='#'><Button variant="swipeGrad lightgreen">Feeds</Button></a></li>
            <li className="n-link"><a href='#'><Button variant="swipeGrad lightgreen">Contact</Button></a></li>
            <div className="hambuger">
              <div id="wrapper">
              <div id="menuToggle">

    <input id="checkbox" type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    <ul onClick={undo} ref={check}id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>Innov8Learn</li></a>
      <a href="#programs"><li>Programs</li></a>
      <a href="#"><li>Gallery</li></a>
      <a href="#"><li>Feeds</li></a>
      <a href="#"><li>Contact</li></a>
      <li className="n-socials">
      <div className="f-copy-socials">
        <a classname="f-copy-social-link" href="https://www.linkedin.com/company/innov8hub/"><AiFillLinkedin/></a>
        <a classname="f-copy-social-link" href="https://www.facebook.com/Innov8hub.ng"><AiFillFacebook/></a>
        <a classname="f-copy-social-link" href="https://twitter.com/innov8hub"><FaTwitterSquare/></a>
        <a classname="f-copy-social-link" href="https://www.instagram.com/innov8hub.ng/"><AiFillInstagram/></a>
        <a classname="f-copy-social-link" href="https://www.youtube.com/channel/UC5K-fpwQti3DKkkgyR44PtA"><AiFillYoutube/></a>
      </div>
      </li>
    </ul>
  </div>
              </div>
            </div>
        </ul>
       
    </div>
  )
}

export default NavBar