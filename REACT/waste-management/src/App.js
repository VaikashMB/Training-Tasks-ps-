import React from 'react'
import Home from './pages/Home'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import About from './pages/About';
import Login from './pages/Login';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';


const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            {!user && (
              <Route path="login" element={<Login authenticate={() => setUser(true)} />}
              />
            )}
            {user ? (
              <>
                <Route path="about" element={<About />} />
                <Route path='schedule' element={<Schedule />} />
                <Route path="services" element={<Services />} />
              </>
            ) : (
              <>
                <Route path="about" element={<Navigate to="/" />} />
                <Route path="schedule" element={<Navigate to="/" />} />
                <Route path="services" element={<Navigate to="/" />} />
              </>
            )}
            <Route index element={<Home />} />
            


            {/* <Route path='/' element={<Home/>}/>
        <Route path='schedule' element={<Schedule/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='login' element={<Login/>}/> */}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>

    </div>
  )
}

export default App