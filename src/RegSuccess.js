import React from 'react';
import { Link } from 'react-router-dom';

function RegSuccess() {
  return (
    <div>
        <h3>User registration successful. Please click <Link to="/Login" className="link-danger">here</Link> to login to JIGIJIGI.com</h3>
    </div>
  )
}

export default RegSuccess