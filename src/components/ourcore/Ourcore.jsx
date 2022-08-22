import React from 'react'
import './ourcore.css'
import lady from '../../images/oc-lady.png'
import lightbulb from "../../images/lightbulb.svg"
import loop from "../../images/loop.svg"
import { useParallax } from 'react-scroll-parallax'

function Ourcore() {
    const parallax = useParallax({
        speed: -10,
      });
    const parallax2 = useParallax({
        speed: 5,
      });
    // const ladyStyle={
    //     backgroundImage:`url(${lady})`,
    //     backgroundSize:`contain`,
    //     backgroundRepeat:`no-repeat`,
    //     position:`absolute`,
    //     width:`15rem`,
    //     height:`8vw`,
    //     bottom:`9vw`,
    //     transform:`translateX(-34%)`,
    //     zIndex:`2`,
    //     pointerEvents:"none"
    // }
    const ladyStyle={
        backgroundImage:`url(${lady})`,
        backgroundSize:`contain`,
        backgroundRepeat:`no-repeat`,
        position:`absolute`,
        width:`32vw`,
        height:`8vw`,
        bottom:`9vw`,
        transform:`translateX(-34%)`,
        zIndex:`2`,
        pointerEvents:"none"
    }
    const imgStyle={
        width:"5rem",height:"5rem"
    }
    const _handleIn= () => {
        var but = document.querySelectorAll('.oc-card');
        var span = document.querySelectorAll('.span1');
        but.addEventListener('mouseenter', (e)=> {
            var relX = e.pageX - but.offsetLeft;
            var relY = e.pageY - but.offsetTop;
            console.log(span);
			span.style.top = relX+"px"
			span.style.left = relY+"px"
        })
      }
    const _handleOut = () => {
        var but = document.querySelector('.oc-card');
        var span = document.querySelector('.span1');
        but.addEventListener('mouseout', (e)=> {
      		var relX = e.pageX - but.offsetLeft;
      		var relY = e.pageY - but.offsetTop;
			span.style.top = relY+"px"
			span.style.left = relX+"px"
        })
    }      
  return (
    <div className='oc'>
        
        <h1 className="oc-header">Our <span style={{ color: "#EA7F1E"}}>Core</span></h1>
      <div className="oc-wrapper">
        <div className="oc-cards-wrapper">
            <div className="oc-card"  >
                <lord-icon
                     src="https://cdn.lordicon.com/nobciafz.json"
                     trigger="hover"
                     colors="primary:#121331,secondary:#94d37b"
                    style={imgStyle}>
                </lord-icon>
                <h2 className="oc-card-header">Innovation Consulting</h2>
                <p className="oc-card-desc">
                Innov8 provides needed workspace, equipment and mentoring to people with ideas they hope to transfer into invention, innovation and solution.
We incubate, groom and grow innovation start-ups.
                </p>
                <span className="span1"></span>
            </div>
            <div className="oc-card"   >
                <lord-icon
                    src="https://cdn.lordicon.com/zpxybbhl.json"
                    trigger="hover"
                    delay="2000"
                    colors="primary:#121331,secondary:#08a88a"
                    style={imgStyle}>
                </lord-icon>
                <h2 className="oc-card-header">Start-Up Incubation</h2>
                <p className="oc-card-desc">
                We offer extensive product development services, expert design and engineering, advanced CAD services, mechanical design services and prototyping.
We create and test fully-functional prototypes as proof of concept.
                </p>
                <span className="span1"></span>
            </div>
            <div className="oc-card"   >
                <lord-icon
                    src="https://cdn.lordicon.com/zpxybbhl.json"
                    trigger="hover"
                    delay="2000"
                    colors="primary:#121331,secondary:#08a88a"
                    style={imgStyle}>
                </lord-icon>
                <h2 className="oc-card-header">Human Capital Development</h2>
                <p className="oc-card-desc">
                Through our expertise network of partnerships, we provide strategic direction / mentoring to organisations and individuals looking to implement new development in innovation startup.
                </p>
                <span className="span1"></span>
            </div>
        </div>
        <div className="oc-cards-wrapper">
        <div className="lady" style={ladyStyle}></div>
            <div className="oc-card oc-card-1"  >
                
                <lord-icon
                     src="https://cdn.lordicon.com/nobciafz.json"
                     trigger="hover"
                     colors="primary:#121331,secondary:#94d37b"
                    style={imgStyle}>
                </lord-icon>
                <h2 className="oc-card-header">Innovation Consulting</h2>
                <p className="oc-card-desc">
                Innov8 provides needed workspace, equipment and mentoring to people with ideas they hope to transfer into invention, innovation and solution.
We incubate, groom and grow innovation start-ups.
                </p>
                <span className="span1"></span>
            </div>
            <div className="oc-card"   >
                <lord-icon
                    src="https://cdn.lordicon.com/zpxybbhl.json"
                    trigger="hover"
                    delay="2000"
                    colors="primary:#121331,secondary:#08a88a"
                    style={imgStyle}>
                </lord-icon>
                <h2 className="oc-card-header">Start-Up Incubation</h2>
                <p className="oc-card-desc">
                We offer extensive product development services, expert design and engineering, advanced CAD services, mechanical design services and prototyping.
We create and test fully-functional prototypes as proof of concept.
                </p>
                <span className="span1"></span>
            </div>
            <div className="oc-card"   >
                <lord-icon
                    src="https://cdn.lordicon.com/zpxybbhl.json"
                    trigger="hover"
                    delay="2000"
                    colors="primary:#121331,secondary:#08a88a"
                    style={imgStyle}>
                </lord-icon>
                <h2 className="oc-card-header">Human Capital Development</h2>
                <p className="oc-card-desc">
                Through our expertise network of partnerships, we provide strategic direction / mentoring to organisations and individuals looking to implement new development in innovation startup.
                </p>
                <span className="span1"></span>
            </div>
        </div>
      </div>
      <img ref={parallax.ref} src={loop} alt="" className="loop" />
      <img ref={parallax2.ref} src={lightbulb} alt="" className="lightbulb" />
      
    </div>
  )
}

export default Ourcore
