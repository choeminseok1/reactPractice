import React from 'react'

function ImgCard(item) {
  return (
    <div>
      <div className="content_img">
        <img src={item.item} alt="" />
      </div>
    </div>
  )
}

export default ImgCard