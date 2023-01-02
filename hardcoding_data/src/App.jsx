import { useState } from 'react'
import './App.css'

function App() {
  const [value,setValue] = useState('')
  const [list,setList] = useState([
    {
      id : 0,
      name : 'creanUp',
      time : '22:00'
    },
    {
      id : 1,
      name : 'wash',
      time : '23:00'
    }
  ])

  function saveBtn() {
    let maxNumber = Math.max(...list.map((e) => e.id));
    setList((saveData)=>[
      {
        id : maxNumber+1,
        name : value,
        time : '24:00'
      },
      ...saveData
    ])
  }

  function deleteBtn(id) {
    //list.map((listAll)=>listAll.id)
    setList((list)=>
      list.filter((listSelf)=>
      listSelf.id !== id 
      )
    )
  }

  return (
    <div className="App">
      <input type="text" value={value} onChange={(inputMySelf)=>setValue(inputMySelf.target.value)} />
      <button onClick={saveBtn}>추가</button>
      <div>{list.map((todayContent)=>
        <>
          <div>{todayContent.name}</div>
          <div>{todayContent.time}</div>
          <button onClick={()=>deleteBtn(todayContent.id)}>삭제</button>
        </>
      )}</div>
    </div>
  )
}


export default App
