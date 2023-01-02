import { useState } from 'react'
import './App.css'

function App() {
  const [value,setValue] = useState('')
  // input의 밸류,데이터는 기본적으로 양방향 바인딩이 되야함. 입력을 하면, 저장을 할곳이 필요함.
  // '' = 텍스트처리
  const [newValue,setNewValue] = useState({})
  const [list,setList] = useState([
    {
      id:1,
      value:'밥',
      listUpdate:true
    },
    {
      id:2,
      value:'공부',
      listUpdate:true
    }
  ])
  //배열안에 object 형식으로 구성되어있음.
  const addTodo = ()=>{
    let a = Math.max(...list.map((e) => e.id));
    // ... 전개연산자(재할당이 안되는 const 활용을 위해 복사해줌)
    setList((prevList)=>[
      {
        id:a + 1,
        value,
        //위에선 key,value 형태를 따르지 않고, value만 적었다. 키와 밸류의 이름이 동일하면 이렇게 사용가능함.
        listUpdate:true
      },
      ...prevList
    ])
    setValue('')
  }

  const del = (id)=>{
    setList(
      list.filter((prevList)=>prevList.id !== id)
      //filter 는 prevList.id !== id를 반환환다. 즉, 아이디가 일치하지않는 친구들만 반환한다.
      //클릭한 친구는 아이디가 일치하기에 반환되지 않는다.
    )
  }

  const handleUpdate = (a)=>{
    console.log(a)
    setList(
      list.map(item=>item.id == a.id ? {...item, listUpdate: !a.listUpdate } : item)
    )
    setNewValue(prev=>{
      prev[a.id] = a
      return prev
    })
    console.log(newValue)
  }

  const saveChange = (id,newValue)=>{
    setList(
      list.map(
        item=>item.id == id ? {...item, value:newValue[id].value, listUpdate: true} : item
      )
    )
  }

  const handleCancel = (id)=>{
    setList(
      (list.map(
        item=>item.id == id ? {...item, listUpdate : true} : item)
      ))
  }

  const handleChange = (e,id)=>{
    setNewValue(
      (item)=>{
        const test = {...item}
        test[id].value = e.target.value
        return test
      }
    )
  }

  return (
    <div className="App">
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      {/* 위에서 선언된 value를 위에서 선언한 value자리에 넣어줬음,화살표 함수를 사용하고, 따로 정의하지 않고 첫번째 자리에 입력하는 매개변수는, node 본인 스스로를 받아온다.
      target.value, currnetTarget.value =  현재 타겟의 vlaue를 지정함*/}
      <button onClick={addTodo}>입력</button>
      {list.map((item,i)=>
      //배열이나 object와 같이 length가 있으면 map 함수 사용가능(for문)
      <div key={item.id}>
        {
          item.listUpdate ? <div>{item.value}</div> : <input type="text" value={newValue[item.id].value} onChange={(e)=>handleChange(e,item.id)} />
          //if 구문에서 물어보는것은 참인지 물어보는것이다. 따라서 위의 listUpdate value에 'true'로 선언되어 있는지 확인하는것.
        }
        {item.listUpdate ? <button onClick={()=>handleUpdate(item)}>수정</button> : <button onClick={()=>handleCancel(item.id)}>취소</button>}
        {!item.listUpdate ? <button onClick={()=>saveChange(item.id,newValue)}>저장</button> : <></>}
        <button onClick={()=>del(item.id)}>삭제</button>
        {/* 위에서 화살표 함수로 감싸준 이유는, 트리거가 버튼 자체가 되게 한번 감싸준것. */}
      </div>
      )}
      {/* return 안에서 js문법을 사용하기 위해서는, {} 형태로 감싸서 오브젝트 형식으로 만들면 된다 */}
    </div>
  )
}

export default App



