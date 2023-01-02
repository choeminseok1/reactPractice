import { useState } from 'react'
import './App.css'

function App() {

  const [list,setList] = useState([
    {
      id: 1,
      value:'밥먹기'
    },
    {
      id:2,
      value : '경대가기'
    }
  ])
  const [inputVal,setInpuVal] = useState('')
  

  function handleChange (e){
    setInpuVal(e.currentTarget.value)
  }

  function addBtn() {
    setList(
      (prevList)=>{
        return[
          {
            id : list.length + 1,
            value: inputVal
          },
        ...prevList //전개연산자 -> 내부값을 펼침
      ]}
    )
  }

  function del(id){
    setList(
      (prevList)=>prevList.filter((a)=>a.id !== id)
    )
  }

  return (
    <div className="App">
      <>
        <input type="text" value={inputVal} onChange={handleChange}/>
        <button onClick={addBtn}>입력</button>
        <div className='wrap'>
          <div className='frame'>
            <div>
              {list.map((today)=>
                <div onClick={()=>del(today.id)} key={today.id}>{today.value}</div>
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default App
