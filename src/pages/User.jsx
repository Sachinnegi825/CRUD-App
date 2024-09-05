import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUsers, updateUser } from "../api/userService";
import UpdateUser from "../components/UpdateUser";
import Loading from "../components/Loading/Loading";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();

  useEffect(() => {
    loadUser();
  }, [id]);

  const loadUser = async () => {
    try {
      setLoading(true)
      const response = await fetchUsers();
      const foundUser = response.data.find((user) => user.id === parseInt(id));
      setUser(foundUser);
      setLoading(false)
    } catch (error) {
      alert("Failed to load user");
    }
  };

  const handleUpdate = async (updatedUser) => {
    try {
      setLoading(true)
      await updateUser(id, updatedUser);
      setLoading(false)
      alert("User updated successfully");
      setUser(updatedUser);
      navigate("/")
      
    } catch (error) {
      alert("Failed to update user");
    }
  };

  if(loading){
    return <Loading/>
  }

  return (
    <>
       <h1 style={{textAlign:"center",textDecoration:"underline"}}>Update User</h1>
      <UpdateUser user={user} updateUser={handleUpdate} />
    </>
  );
};

export default User;
