import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectPage = () => {

  // Normal state
  const [count, setCount] = useState(0);

  // API state
  const [users, setUsers] = useState([]);

  // Timer state
  const [seconds, setSeconds] = useState(0);

  // -----------------------------------------
  // 1. Runs Only Once (Component Did Mount)
  // useEffect(() => {
  //   console.log("Component Mounted - Runs Once");
  // }, []);

  // -----------------------------------------
  // 2. Runs When Dependency Changes
  // useEffect(() => {
  //   console.log("Count Changed:", count);
  // }, [count]);

  // -----------------------------------------
  // 3. Cleanup Example (Timer)
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setSeconds(prev => prev + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //     console.log("Timer Cleaned Up");
  //   };
  // }, []);

  // -----------------------------------------
  // 4. API Call using Axios

   const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(res)
        setUsers(res.data);
        console.log(res.data)
      } catch (error) {
        console.error("API Error:", error);
      }
  };


  useEffect(() => {
    fetchUsers();
  }, []);

  // -----------------------------------------
  // 5. Infinite Loop Example (DO NOT DO THIS)
  /*
  useEffect(() => {
    setCount(count + 1);
  });
  */

  return (
    <div style={{ padding: "20px" }}>
      <h2>useEffect Variations Demo</h2>

      <hr />

      {/* Dependency Example */}
      {/* <h3>Count Example</h3>
      <button className="border" onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
      <p>Count: {count}</p> */}

      <hr />

      {/* Cleanup Example */}
      {/* <h3>Timer Example (Cleanup)</h3>
      <p>Seconds: {seconds}</p> */}

      <hr />

      {/* Axios API Example */}
      <h3>Axios API Users</h3>
      {users.map(user => (
        <p key={user.id}>{user.name} -  {user.username}</p>
      ))}

    </div>
  );
};

export default UseEffectPage;
