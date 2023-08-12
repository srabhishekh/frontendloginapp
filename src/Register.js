import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import validation from './RegisterValidation';
import axiosConfig from './axiosConfig';
import axios from "axios";

function Register() {

    const [values, setValues] = useState({
        username : '',
        password:'',
        name:'',
        email:''
    });

    const [errors, setErrors] = useState({ 
        username : '',
        password:'',
        name:'',
        email:''
    });

    const handleInput=(event)=>{
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.username==="" && errors.password==="" && errors.email==="" && errors.name==="") {
            const url = axiosConfig.defaults.registerURL;
            console.log(values);
            const data = {'username' : values.username[0], 'password':values.password[0], 'email' : values.email[0], 'name':values.name[0]};
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                data: data,
                url,
            };
            axios(options).then(res => console.log(res)).catch(e => console.log(e));
        }
    }

  return (
    <div className="auth-wrapper">
          <div className="auth-inner">
    <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" className="form-control" placeholder="Full name" name="name" onChange={handleInput}/>
          {errors.name && <span className='text-danger'>{errors.name}</span>}
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="Username"  name="username" onChange={handleInput}/>
          {errors.username && <span className='text-danger'>{errors.username}</span>}
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={handleInput}/>
          {errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleInput}/>
          {errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/Login" className="link-danger">Sign in?</Link>
        </p>
      </form>
      </div>
      </div>
  )
}

export default Register