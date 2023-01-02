import React from 'react'
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'

function Detail() {

    const [idData,setIdData] = useState({})
    const [loading,setLoading] = useState(true)
    let {id} = useParams()

    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/hongyungeun/react-router-practice/products/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            setIdData(res)
            setLoading(false)
        })
        },[])

  return (
    <div className="content_detail">
        {loading ? <div>로딩중입니다</div> : 
        <>
            <div className="content_img">
                <img src={idData.img} alt="" />
            </div>
            <div className="content_right">
                <div className="content_name">
                    {idData.title}
                </div>
                <div className="content_price">
                    {idData.price}
                </div>
                <div className="content_recommendation">
                    {idData.choice ? <p>추천</p> : <></>}
                </div>
                <select name="" id="">
                    <option hidden>사이즈 선택</option>
                    {idData.size.map((size)=>
                        <option>{size}</option>
                    )}
                </select>
            </div>
        </>}
    </div>
  )
}

export default Detail