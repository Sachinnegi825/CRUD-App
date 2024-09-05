import React, { useState, useEffect } from 'react';
import { createUser } from '../api/userService';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const navigate=useNavigate();

 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    const data =await createUser(formData);
    
    if(data.status==201){
      alert('User Created Succesfully')
      navigate("/")

    }
  };

  return (
    <>
    <h1 style={{textAlign:"center",textDecoration:"underline"}}>Create User</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">Create User</button>
    </form>
    </>
    
  );
};

export default CreateUser;
