import React from 'react'
import { useState,useEffect } from 'react';

function shop() {
    const [sellData,setSellData] = useState([
        {
            choice: '',
            img:'',


        }
    ])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/hongyungeun/react-router-practice/products')
        .then((response)=>response.json())
        .then((response)=>{
            setSellData(response)
            setLoading(false)
        })
    },[])

    return (
        <div className='sellWrap'>
            {loading ? <>로딩중</> : sellData.map((dataValue,i)=>(
                    <div className="content" key={i}>
                        <div className="content_img">
                            <img src={dataValue.img} alt="" />
                        </div>
                        <div className="content_recommendation">
                            {dataValue.choice ? <p>추천</p> : <>비추천</>}
                        </div>
                        <div className="content_name">
                            {dataValue.title}
                        </div>
                        <div className="content_price">
                            {dataValue.price}
                        </div>
                        <div className="content_newold">
                            {dataValue.new ? <p>신제품</p> : <p>구제품</p>}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default shop