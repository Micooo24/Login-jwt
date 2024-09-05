import React from 'react'
import { Form } from 'react-bootstrap'
import './Signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    name: '',
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
     const response = await fetch('http://localhost:5000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log(result);
      alert("Signup successful");
      navigate('/login');

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
      <h1>Signup</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name= "email"placeholder="Enter email" value={formData.email} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name= "name" placeholder="Enter Name "value={formData.name} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name= "password" placeholder="Enter Password" value={formData.password} onChange={handleInputChange}/>
      </Form.Group>
      <button type="submit" className="btn btn-primary">Signup</button>
    </Form>
  )
}

export default Signup