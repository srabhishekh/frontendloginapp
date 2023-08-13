import React, { useState } from 'react';
import Login from './Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Home from './Home';
import Landing from './Landing';
import Logout from './Logout';
import RegSuccess from './RegSuccess';

function App() {

  const [props, setLoginState] = useState({
    name:'There',
    loginStatus:false
  });

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              JIGIJIGI
            </Link>
            <div className={`collapse navbar-collapse ${props.loginStatus === true ? "hide-div" : "show-div"}`} id="navbarTogglerDemo02">
            {/* className={`collapse navbar-collapse ${props.loginStatus === true ? "hide-div" : "show-div"}`} */}
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
            <div className={`${props.loginStatus === true ? "show-div" : "hide-div"}`}>
                <Logout setLoginState={setLoginState}/>
            </div>
            
          </div>
        </nav>
        <div className="auth-wrapper">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login setLoginState={setLoginState}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/landing" element={<Landing fullName={props.name}/>} />
            <Route path="/regSuccess" element={<RegSuccess />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App