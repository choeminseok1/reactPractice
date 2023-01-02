let a = [
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
  ]

  console.log(
    a.map((e)=>e)
  )
  console.log(
    ...a.map((e)=>{e})
  )