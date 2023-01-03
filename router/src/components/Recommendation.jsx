import React from 'react'

function Recommendation(item) {
  return (
    <div>
        <div className="content_recommendation">
            {item.item.choice ? <p>추천</p> : <p></p>}
        </div>
        <div className="content_name">
            {item.item.title}
        </div>
        <div className="content_price">
            {item.item.price}
        </div>
        <div className="content_newold">
            {item.item.new ? <p>신제품</p> : <p></p>}
        </div>
    </div>
  )
}

export default Recommendation