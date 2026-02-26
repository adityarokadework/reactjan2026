import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserDetail = () => {

  const { id } = useParams(); 

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (!user) return <h3>user not found</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Detail</h2>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>

    </div>
  );
};

export default UserDetail;