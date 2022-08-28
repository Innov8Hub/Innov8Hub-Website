import React from 'react'
import FacebookPosts from '../facebookPosts/FacebookPosts'
import "./footer.css"
import {FaFacebookSquare} from 'react-icons/fa'
import logo from '../../images/Innov8 LOGO.svg'


function footer() {
  return (
    <div className='f'>
      <div className="f-main">
        <section id="" className="f-main-section f-sec-1 f-sec">
            <h1 className="f-section-header">Innov8 Hub</h1>
            <p className="f-section-p">
            Innov8 Hub, <br />
            Airport Road, Abuja. <br />
            E-mail: innov8techhub@gmail.com <br />
            Phone No: +234 906 520 0034 
            </p>
            <img src={logo} alt="" className="f-logo" />

        </section>
        <section id="" className="f-main-section f-sec-2 f-sec">
           <div className="f-main-section-mid1">
                <h1 className="f-section-header">Navigation</h1>
                <p className="f-section-p">
                News <br />
                Gallery <br />
                Innov8 Learn <br />
                Prototypes Developed <br />
                Kids and teens holiday programme <br />
                TETFund-Pathway to Triple Helix Concept
                </p>
           </div>
           <div className="f-main-section-mid2">
                <h1 className="f-section-header">Trending Courses</h1>
                <p className="f-section-p">
                    Introduction to Data Science with Python
                </p>
           </div>
        </section>
        <section id="" className="f-main-section f-sec-3 f-sec">
            <h1 className="f-section-header f-facebook-header"><FaFacebookSquare/>Facebook Posts</h1>
            <FacebookPosts/>
        </section>
      </div>
      <div className="f-copy"></div>
    </div>
  )
}

export default footer
