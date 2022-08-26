import React from 'react'
import './recentFeeds.css'
import vectorBottom from '../../images/vector-bottom-yellow.svg'
import RecentFeedCard from '../recentFeedCard/RecentFeedCard'
import img1 from '../../images/recentFeeds/card1.png'
import img2 from '../../images/recentFeeds/card2.png'
import img3 from '../../images/recentFeeds/card3.png'

function RecentFeeds() {
    let card1 = {
        imgBg : img1,
        header : "Partnering with Engineers for Innovation & Development",
        date : "May 6, 2022",
        likes : "20",
        comments : "2"
    }
    let card2 = {
        imgBg : img1,
        header : "Partnering with Engineers for Innovation & Development",
        date : "May 6, 2022",
        likes : "20",
        comments : "2"
    }
    let card3 = {
        imgBg : img1,
        header : "Partnering with Engineers for Innovation & Development",
        date : "May 6, 2022",
        likes : "20",
        comments : "2"
    }
  return (
    <div className="rf-wrapper">
        
        <img src={vectorBottom} alt="" className="vectorBottom" />
      <div className="rf-content-wrapper">
        <h1 className="rf-header">Recent <span style={{ color: "#EA7F1E"}}>Feeds</span></h1>
        <div className="rf-cards-wrapper">
            <a className="rf-card rf-card1" href='https://innov8hub.ng/partnering-with-engineers-for-innovation-development/'>
                <RecentFeedCard img={img1} header={card1.header} date={card1.date} likes={card1.likes} comments={card1.comments}/>
            </a>
            <a className="rf-card rf-card2" href='https://innov8hub.ng/partnering-with-engineers-for-innovation-development/'>
            <RecentFeedCard img={img2} header={card2.header} date={card2.date} likes={card2.likes} comments={card2.comments}/>
            </a>
            <a className="rf-card rf-card3" href='https://innov8hub.ng/partnering-with-engineers-for-innovation-development/'>
            <RecentFeedCard img={img3} header={card3.header} date={card3.date} likes={card3.likes} comments={card3.comments}/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default RecentFeeds
