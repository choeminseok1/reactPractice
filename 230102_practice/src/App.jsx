import { useState } from 'react';
import './App.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navigation from './navigation/Navigation';
import Home from './home/Home';
import FetchNormal from './fetchnormal/FetchNormal';
import Shop from "./shop/Shop";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/home' element={<Home/>}/>
          <Route path='/fetchnormal' element={<FetchNormal/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
