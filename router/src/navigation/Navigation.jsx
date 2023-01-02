import React from 'react'

function Navigation() {
  const item = ['여성','남성','자켓','아우터','이너','악세서리']
  return (
    <div className='navigation_wrap'>
      <div className="login_header">
        <p>person</p>
        <p>로그인</p>
      </div>
      <div className="img_section">
        <img src="data:image/png;base64,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" alt="" />
      </div>
      <div className="chose_menu">
        <div className="chose_left">
          <input className='search_input hidden' type="text" />
          <button className='search_btn hidden'>검색</button>
        </div>
        <div className="chose_center">
          {item.map((itemList)=>
            <div>{itemList}</div>
          )}
        </div>
        <div className="chose_right">
          <input className='search_input' type="text" />
          <button className='search_btn'>검색</button>
        </div>
      </div>
    </div>
  )
}

export default Navigation