import React from 'react';




import SignupS from './Components/SignupS';
import LoginS from './Components/LoginS';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './Components/Home';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LoginS />} />
          <Route path='/signup' element={<SignupS />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>



    </>

  );
}

export default App;
