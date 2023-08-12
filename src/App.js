import React from 'react';
import Login from './Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Home from './Home';
import Landing from './Landing';
import Logout from './Logout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              JIGIJIGI
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/register'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
            <Logout/>
          </div>
          
        </nav>
        <div className="auth-wrapper">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/landing" element={<Landing />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App