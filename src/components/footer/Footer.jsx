import React from 'react'
import FacebookPosts from '../facebookPosts/FacebookPosts'
import "./footer.css"


function footer() {
  return (
    <div className='f'>
      <div className="f-main">
        <section id="f-sec-1" className="f-main-section">
            <h1 className="f-section-header">Innov8 Hub</h1>
            <p className="f-section-p">
            Innov8 Hub, <br />
            Airport Road, Abuja. <br />
            E-mail: innov8techhub@gmail.com <br />
            Phone No: +234 906 520 0034 
            </p>

        </section>
        <section id="f-sec-2" className="f-main-section">
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
        <section id="f-sec-3" className="f-main-section">
            <h1 className="f-section-header">Facebook Posts</h1>
            <FacebookPosts/>
        </section>
      </div>
      <div className="f-copy"></div>
    </div>
  )
}

export default footer
