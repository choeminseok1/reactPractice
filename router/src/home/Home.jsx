import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [data,setData] = useState([])
    let navigate = useNavigate()

    useEffect(()=>{
      fetch('https://my-json-server.typicode.com/hongyungeun/react-router-practice/products')
      .then((res)=>res.json())
      .then((res)=>{
          setData(res)
      })
    },[])

    function move(id) {
      navigate(`/detail/${id}`)
    }

  return (
    <div className='content_wrap'>
      {data.map((dataValue,i)=>
        <div className="content" key={i} onClick={()=>move(dataValue.id)}>
          <div className="content_img">
            <img src={dataValue.img} alt="" />
          </div>
          <div className="content_recommendation">
            {dataValue.choice ? <p>추천</p> : <p></p>}
          </div>
          <div className="content_name">
            {dataValue.title}
          </div>
          <div className="content_price">
            {dataValue.price}
          </div>
          <div className="content_newold">
            {dataValue.new ? <p>신제품</p> : <p></p>}
          </div>
        </div>
      )}
    </div>

  )
}

export default Home