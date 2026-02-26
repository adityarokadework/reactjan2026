import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users List</h2>

      {users.map(user => (
        <div key={user.id}>
          {/* Navigate using ID */}
          <Link to={`/user/${user.id}`}>
            <p>
              {user.name} - {user.username}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;