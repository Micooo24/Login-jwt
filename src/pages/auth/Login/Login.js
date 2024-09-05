import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import './Login.css';



function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
   
    // console.log("email:", formData.email);
    // console.log("name:", formData.name);
    // console.log("password:,", formData.password);
    
    try {
     const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      localStorage.setItem('token', result.token);
      console.log(result);
      alert("Signup successful");
      navigate('/dashboard');

    } catch (error) {
      console.error(error.message);
    } finally {
      setFormData({
        email: '',
        name: '',
        password: ''
      });
    }
    
    
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name= "email"placeholder="Enter email" value={formData.email} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name= "password" placeholder="Enter Password" value={formData.password} onChange={handleInputChange}/>
      </Form.Group>
      <button type="submit" className="btn btn-primary">Login</button>
    </Form>
  )
}


export default Login