import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axiosConfig from './axiosConfig';
import axios from "axios";
import qs from 'qs';

function Login({setLoginState}) {
    
    const [values, setValues] = useState({
        username : '',
        password:''
    })

    const [errors, setErrors] = useState({
        
    })

    const handleInput=(event)=>{
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const navigate = useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(event.nativeEvent.submitter.name==='formLogin') {
            setErrors(validation(values));
            if(errors.username==="" && errors.password==="") {
                const url = axiosConfig.defaults.loginURL;

                var form = document.createElement('form');
                form.setAttribute('method', 'POST');
                form.setAttribute('action', url);

                var params = {  'username': values.username[0],
                                'password': values.password[0]
                            };
                for (var p in params) {
                    var input = document.createElement('input');
                    input.setAttribute('type', 'hidden');
                    input.setAttribute('name', p);
                    input.setAttribute('value', params[p]);
                    form.appendChild(input);
                }

                document.body.appendChild(form);
                form.submit();


                // console.log(values);
                // const data = {'username' : values.username[0], 'password':values.password[0]};
                // const options = {
                //     method: 'POST',
                //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
                //     data: qs.stringify(data),
                //     url,
                // };
                // axios(options)
                // .then(res => {
                //     console.log("res.headers : "+res.headers);
                //     console.log("res : "+res.data.user);
                //     if (res.data.user) {
                //         setLoginState({
                //             name : res.data.user,
                //             loginStatus : true
                //         });
                //         navigate('/landing');
                //     } else {
                //         errors.message = 'Something went wrong, please try again later';
                //         setErrors(errors);
                //     }
                // })
                // .catch(e => {
                //     if(e.response.status===401) {
                //         errors.message = e.response.data.exception;
                //         setErrors(errors);
                //     } else {
                //         errors.message = e.message;
                //         setErrors(errors);
                //     }
                // });
            }
        } else {
            // var oauth2Endpoint = axiosConfig.defaults.googleAuthorizationURL;
            // //https://accounts.google.com/o/oauth2/v2/auth?response_type=code&
            // //client_id=1023533150803-q081lnnf4tbqkaru13364kuguqf54ih7.apps.googleusercontent.com&
            // //scope=openid%20profile%20email&
            // //state=Bki2N_M-G3oy7-lrIsaFgAAgiXShJbi-_UIwlD-JxbI%3D&
            // //redirect_uri=http://localhost:8080/login/oauth2/code/google&
            // //nonce=RA2WRG4DsO5WyirGA3HASEqahn9Vlocv1emTj3HPOB8
            // var form = document.createElement('form');
            // form.setAttribute('method', 'GET');
            // form.setAttribute('action', oauth2Endpoint);

            // var params = {  'client_id': process.env.REACT_APP_GOOGLE_CLIENT_ID,
            //                 'redirect_uri': axiosConfig.defaults.redirectURL,
            //                 'response_type': 'code',
            //                 'scope': process.env.REACT_APP_GOOGLE_SCOPE,
            //                 'include_granted_scopes': 'true',
            //                 'state': process.env.REACT_APP_GOOGLE_STATE,
            //                 'prompt': process.env.REACT_APP_GOOGLE_PROMPT,
            //                 'authuser': process.env.REACT_APP_GOOGLE_AUTHUSER
            //             };
            // for (var p in params) {
            //     var input = document.createElement('input');
            //     input.setAttribute('type', 'hidden');
            //     input.setAttribute('name', p);
            //     input.setAttribute('value', params[p]);
            //     form.appendChild(input);
            // }

            // document.body.appendChild(form);
            // form.submit();

            var oauth2Endpoint = axiosConfig.defaults.googleLoginURL;

            window.location.assign(oauth2Endpoint);

            // axios.get(oauth2Endpoint
            //     // ,{
            //     //     headers: {
            //     //     'Access-Control-Allow-Origin': '*'
            //     //     }
            //     // }
            //   ).then(response => {
            //     console.log(response);
            //   }).catch(e => {
            //     console.log(e);
            // });
        }
    }

    // const [loginData, setLoginData] = useState(
    //     localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null
    // );

  return (
    <div className="auth-wrapper">
          <div className="auth-inner">
    <form onSubmit={handleSubmit}>
    <h3>Sign In</h3>
    {errors.message && <span className='text-danger text-center'>{errors.message}</span>}
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
      <button type="submit" className="btn btn-primary" name="formLogin">Submit</button>
    </div>
    <p className="small mt-2 pt-1 mb-2">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
    {/* <p className="forgot-password text-right">
      Forgot <a href="#">password?</a>
    </p> */}
    <hr/>
    <button type="submit" className="google-sign-in-button" name="googleLogin">
        Sign in with Google
    </button>
  </form>
  </div>
  </div>
  )
}

export default Login