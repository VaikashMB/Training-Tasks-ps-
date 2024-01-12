import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Post from './Pages/Post';
import CandidateInfo from './Pages/CandidateInfo';
import Assesment from './Pages/Assesment';
import { useState } from "react";
import { RecoilRoot } from 'recoil';




function App() {
  const [user, setUser] = useState(null);
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        {!user && (
          
            <Route
              path="login"
              element={<Login authenticate={() => setUser(true)} />}
            />
        )}
        {user ? (
          <>
          <Route
            path="about"
            element={<About logout={() => setUser(false)} />}
          />
          <Route path='Post' element={<Post />} />
          <Route path='CandidateInfo' element={<CandidateInfo />} />
          <Route path='Assesment' element={<Assesment />} />
          
          </>
        ) : (
          <>
            <Route path="about" element={<Navigate to="/" />} />
            <Route path="Post" element={<Navigate to="/" />} />
            <Route path='CandidateInfo' element={<Navigate to="/" />} />
            <Route path='Assesment' element={<Navigate to="/" />} />
          </>
        )}
        <Route index element={<Home />} />
        <Route path='Login' element={<Login />} />
        

      </Routes>
    </BrowserRouter>

    </RecoilRoot>
    

  );
};

export default App;
