import './App.css';
import React from 'react';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Home from './Home';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Router>
        <header>
          
          <nav>
            <div className="logo-container" onClick={()=>window.location.href='/'} style={{cursor: 'pointer'}}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmjAzfHEoC8x538T3eKbaPNDX_A47SIJY0w&s"
                alt="Alpha Logo"
                className="logo"
              />
              <span className="logo-text">Art</span>
            </div>
            <ol className='navbar'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Aboutus">About Us</Link></li>
              <li><Link to="/Contactus">Contact Us</Link></li>
            </ol>
          </nav>
        </header>

        <Routes>
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>
      
      <footer>
        <h5>@2024 copyrights</h5>
      </footer>
    </div>
  );
}

export default App;

