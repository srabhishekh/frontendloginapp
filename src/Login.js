import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axiosConfig from './axiosConfig';
import axios from "axios";
import qs from 'qs';

function Login() {

    const [values, setValues] = useState({
        username : '',
        password:''
    })

    const [errors, setErrors] = useState({
        username : '',
        password :'',
        message :''
    })

    const handleInput=(event)=>{
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const navigate = useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.username==="" && errors.password==="") {
            const url = axiosConfig.defaults.loginURL;
            console.log(values);
            const data = {'username' : values.username[0], 'password':values.password[0]};
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: qs.stringify(data),
                url,
            };
            axios(options).then(res => {
                console.log("res : "+res.headers);
                navigate('/landing');
            })
                .catch(e => {
                    if(e.response.status===401) {
                        errors.message = e.response.data.exception;
                        setErrors(errors);
                    }
                });
        }
    }


  return (
    <div className="auth-wrapper">
          <div className="auth-inner">
    <form onSubmit={handleSubmit}>
    <h3>Sign In</h3>
    <div className='text-center'>{errors.message && <span className='text-danger text-center'>{errors.message}</span>}</div>
    <div className="mb-3">
      <label>Username</label>
      <input type="text" className="form-control" placeholder="Enter username" name='username' onChange={handleInput}/>
      {errors.username && <span className='text-danger'>{errors.username}</span>}
    </div>
    
    <div className="mb-4">
      <label>Password</label>
      <input type="password" className="form-control" placeholder="Enter password" name='password' onChange={handleInput}/>
      {errors.password && <span className='text-danger'>{errors.password}</span>}
    </div>
    
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    <p className="small mt-2 pt-1 mb-2">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
    {/* <p className="forgot-password text-right">
      Forgot <a href="#">password?</a>
    </p> */}
  </form>
  </div>
  </div>
  )
}

export default Login