import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axiosConfig from './axiosConfig';
import axios from "axios";
import qs from 'qs';

function Redirect({setLoginState}) {
    const queryParams = new URLSearchParams(window.location.search)
    const code = queryParams.get("code")
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        
    })

    const url = axiosConfig.defaults.loginWithGoogleURL;
    console.log("code : "+code)
    const data = {'code' : code};
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: code,
        url,
    };
    axios(options)
    .then(res => {
        console.log("res.headers : "+res.headers);
        console.log("res : "+res.data.user);
        if (res.data.user) {
            setLoginState({
                name : res.data.user,
                loginStatus : true
            });
            navigate('/landing');
        } else {
            errors.message = 'Something went wrong, please try again later';
            setErrors(errors);
        }
    })
    .catch(e => {
        if(e.response.status===401) {
            errors.message = e.response.data.exception;
            setErrors(errors);
        } else {
            errors.message = e.message;
            setErrors(errors);
        }
    });

    return (
        <div>
            <h3>Loading...</h3>
        </div>
    )
}

export default Redirect