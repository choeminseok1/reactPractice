import React from 'react'
import { useState,useEffect } from 'react';
import Card from '../components/Card';

function Home() {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
      fetch('https://my-json-server.typicode.com/hongyungeun/react-router-practice/products')
      .then((res)=>res.json())
      .then((res)=>{
          setData(res)
          setLoading(false)
      })
    },[])

  return (
    <div className='content_wrap'>
      {loading ? <>로딩중</> : 
        data.map((item,i)=>
        (
          <Card props={item}/>
        )
        )
      }
      
      
    </div>

  )
}

export default Home