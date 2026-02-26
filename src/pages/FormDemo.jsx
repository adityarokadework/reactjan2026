import React, { useState } from "react";

const FormDemo = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    city: "",
    message: "",
    agree: false,
    file: null
  });

  // Handle Change
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="border-2 border-red-400">
      <h2 className="text-center p-10 text-5xl">Complete React Form</h2>

      <form className="border" onSubmit={handleSubmit}>

        {/* TEXT */}
        <label>Name : </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="border"
        />
        <h1>{formData.name}</h1>

        <br /><br />

        {/* EMAIL */}
         <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
              className="border"
        />

        <br /><br />

        {/* PASSWORD */}
         <label>Password : </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
              className="border"
        />

        <br /><br />

        {/* NUMBER */}
         <label>Age : </label>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
              className="border"
        />

        <br /><br />

        {/* RADIO */}
        
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
              className="border"
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
              className="border"
        /> Female

        <br /><br />

        {/* SELECT */}
         <label>City : </label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
              className="border"
        >
          <option value="">Select City</option>
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Nashik</option>
        </select>

        <br /><br />

        {/* TEXTAREA */}
         <label>Message : </label>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
              className="border"
        />

        <br /><br />

        {/* CHECKBOX */}
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
                className="border"
          />
          Accept Terms
        </label>

        <br /><br />

        {/* FILE */}
         <label>File : </label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
              className="border"
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default FormDemo;