import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserList = ({ users, deleteUser }) => {
    const navigate=useNavigate();

    const handleUpdate=(id)=>{
        navigate(`/users/${id}`)
    }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td style={{display:"flex",gap:"10px"}}>
              <button onClick={()=>handleUpdate(user.id)} title='Update User'>Update</button>
              <button onClick={() => deleteUser(user.id)} title='Delete User'>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
