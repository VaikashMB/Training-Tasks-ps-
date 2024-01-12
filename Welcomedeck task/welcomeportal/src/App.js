import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import EmpForm from './components/EmpForm';
import DisplayDecks from './components/DisplayDecks';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<EmpForm/>}/>
          <Route path='display-decks' element={<DisplayDecks/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
