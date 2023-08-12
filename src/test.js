import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
from 'mdb-react-ui-kit';
import validation from './LoginValidation';

function Login() {

    const [values, setValues] = useState({
        username : '',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleInput=(event)=>{
        setValues(prev => ({...prev, [event.currentTarget.name]:[event.currentTarget.value]}))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
    }

  return (
    <div>
            <form action='' onSubmit={handleSubmit}>
                <MDBContainer fluid>
                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12'>
                        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-5 text-center">Sign in</h2>
                            {errors.username && <span className='text-danger'>{errors.username}</span>}
                            <MDBInput wrapperClass='mb-4 w-100' label='Username' id='formControlLg' type='username' size="lg" onChange={handleInput} name='username'/>
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                            <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" onChange={handleInput} name='password'/>
                            
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                            <MDBBtn size='lg'>
                                Login
                            </MDBBtn>
                            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>

                            <hr className="my-4" />

                            <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                                <MDBIcon fab icon="google" className="mx-2"/>
                                Sign in with google
                            </MDBBtn>

                            </MDBCardBody>
                        </MDBCard>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </form>
    </div>
  )
}

export default Login