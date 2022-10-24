import React from 'react'

function Card(props) {
  return (
    <div className="c"  >
        <div className="c-movable">{props.children}</div>
    </div>
  )
}

export default Card