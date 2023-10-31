import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom';
import Login from './Login';


function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate(); 


  const handleSubmit = (event) => {
    event.preventDefault();

    // Save registration data in localStorage
    localStorage.setItem('userData', JSON.stringify(formData));

    console.log('Registration data saved:', formData);
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>
          <MDBCardBody className='px-4'>
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={handleSubmit}>
              <MDBCol md='6'>
                <MDBInput
                  wrapperClass='mb-4'
                  label='First Name'
                  size='lg'
                  name='firstName'
                  type='text'
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Email'
                  size='lg'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <MDBInput
                  wrapperClass='mb-4'
                 label='Set Password'
                  size='lg'
                  name='password'
                  type='password'
                  value={formData.password}
                  onChange= {handleInputChange}
                /> 
              </MDBCol>
              
              <MDBBtn type='submit' color='primary' onClick={() => navigate("/login")}>
                SUBMIT
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
