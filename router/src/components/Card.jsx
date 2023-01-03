import React from 'react'
import ImgCard from './ImgCard';
import Recommendation from './Recommendation';

import { useNavigate } from 'react-router-dom';

function Card(dataValue) {
  let navigate = useNavigate()

  function move(id) {
    navigate(`/detail/${id}`)
  }

  return (
    <div>
        <div className="content" onClick={()=>move(dataValue.props.id)}>
          <ImgCard item={dataValue.props.img}/>
          <Recommendation item={dataValue.props}/>
        </div>
    </div>
  )
}

export default Card