import React from 'react'
import Homepage from './homepage';
import Priority from './Priority';
import Final from './Final';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/Prior" element={<Priority/>}/>
            <Route path="/Final" element={<Final/>}/>
            <Route path="/About" element={<About/>}/>
        </Routes>
    </Router>
  );
}

export default App
