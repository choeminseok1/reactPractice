import { useState } from 'react'


function FetchNormal() {
    const [user,setUser] = useState([])

    function callBack() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((response)=>{
        setUser(response)
        })
    }

    return (
        <>
            <p>제목 : fetch로 데이터 받아오기 연습.jsonplaceholder 사용</p>
            <button onClick={callBack}>유저정보 받기</button>
            {
            user.map((userData)=>
                <>
                    <div>id : {userData.id}</div>
                    <div>id : {userData.name}</div>
                    <div>id : {userData.address.city}</div>
                </>
            )
            // map에는 중괄호로 묶어주지 않는다. 묶어주고 싶다면()를 사용하거나, return을 해줘야한다.
            }
        </>
    )
}

export default FetchNormal