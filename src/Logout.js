import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosConfig from './axiosConfig';
import axios from "axios";

function Logout({setLoginState}) {

    
    const navigate = useNavigate();
    const handleLogout=(event)=>{
        event.preventDefault();
        const url = axiosConfig.defaults.logoutURL;
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            url,
            withCredentials: true
        };
        axios(options)
        .then(res => {
            console.log("res : "+res.headers);
            setLoginState({
                name:'There',
                loginStatus:false
            });
            navigate('/');
        })
        .catch(e => {
            if(e.response.status===401) {
            }
        });
    }

  return (
    <div>
        <Link className="nav-link" onClick={handleLogout}>
            Sign Out
        </Link>
    </div>
  )
}

export default Logout