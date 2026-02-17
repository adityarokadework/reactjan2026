import React, { useState } from 'react';
// import Navbar1 from './Common/Navbar1';

const UseState = () => {

  // Number State
  const x = 10;
  const [count, setCount] = useState(10);
 
  // String State
  const [name, setName] = useState("Aditya");

  // Array State
  const [items, setItems] = useState(["React", "Node"]);

  // Object State
  const [user, setUser] = useState({
    age: 25,
    city: "Mumbai"
  });

  // ➕ Number Function
  const add = () => {
    setCount(c => c + 1);
  };

  // String Update
  const changeName = () => {
    setName("ESTPL");
  };

  // Array Update
  const addItem = () => {
    setItems([...items, "Express"]);
  };

  // Object Update
  const updateUser = () => {
    setUser({
      ...user,
      city: "Pune"
    });
  };

  return (
    <div>
  

      {/* Number */}
      {/* <button className='border cursor-pointer' onClick={add}>Increase Count</button>
      <p>Count: {count}</p>

      <hr /> */}

      {/* String */}
      {/* <button onClick={changeName}>Change Name</button>
      <p>Name: {name}</p>

      <hr /> */}

      {/* <button  className="border" onClick={addItem}>Add Skill</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}

      <hr />

      {/* Object */}
      <button onClick={updateUser}>Update City</button>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>



      {/* props drilling */}

      {/* <Navbar1 name="" /> */}

    </div>
  );
};

export default UseState;
