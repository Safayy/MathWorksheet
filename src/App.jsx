import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Leaderboard from './components/Leaderboard';

import './App.css'
import './index.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
        </Routes>
      </Router>
      <p className="roboto-thin center font-small">copyright: <a href='https://www.mathinenglish.com'>www.mathinenglish.com</a></p>
      </>
    )
}

export default App