import React from 'react'
import {BsSuitHeartFill} from 'react-icons/bs'
import {FaComment} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai' 

function RecentFeedCard(props) {
  return (
    <div className='rfc'>
      <div className="rfc-img-wrapper">
        <img src={props.img} alt="" className="rfc-img" />
        <h1 className="rfc-header">{props.header}</h1>
        <h5 className="rfc-date">{props.date}</h5>
      </div>
      <div className="rfc-socialStuff">
        <div className="rfc-likes liked">
            <BsSuitHeartFill/>
            <div className="rfc-text">
            {props.likes}
            </div>
        </div>
        <div className="rfc-comments">
            <FaComment/>
            <div className="rfc-text">
            {props.comments}
            </div>
        </div>
        <div className="rfc-star">
          <AiFillStar/>
        </div>
      </div>
    </div>
  )
}

export default RecentFeedCard
