import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
      <div>네비게이션</div>
      <Link to="/fetchnormal">to Fetch Normal</Link>
      <Link to="/shop">to Shop</Link>
      {/* 위의 ''에는 app router의 path와 동일하게 적는다  */}
    </>
  )
}

export default Navigation