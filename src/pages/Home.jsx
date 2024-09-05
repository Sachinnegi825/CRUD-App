import React, { useState, useEffect } from "react";

import UserList from "../components/UserList";
import { deleteUser, fetchUsers } from "../api/userService";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true)
      const response = await fetchUsers();
      setUsers(response.data);
      setLoading(false)
    } catch (error) {
      alert("Failed to fetch users");
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true)
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      setLoading(false)
      alert("User Deleted Successfully")
    } catch (error) {
      alert("Failed to delete user");
    }
  };

  const addUser=()=>{
    navigate("/createUser")
  }

  if(loading){
    return <Loading/>
  }

  return (
    <>
     <div className="header">
  <h1 className="main-heading">CRUD APP</h1>
  <button title="Add User" className="add-user-button" onClick={addUser}>Add User</button>
</div>

      <h1>Users</h1>
      <UserList users={users} deleteUser={handleDelete} />
    </>
  );
};

export default Home;
