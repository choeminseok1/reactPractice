import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './home/Home';
import Navigation from './navigation/Navigation';
import Detail from './detail/Detail';
import Login from './login/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
