import "./signup.css"
import { Link } from "react-router-dom";
import Login from "./Login";
import {useState} from 'react'
export default function SignUp() {
  let [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value};
    })
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      username: "",
      password: ""
    });
  };

    return (
        
        <div className="signup">
        <form onSubmit={handleSubmit}>
      <h2>Sign Up </h2>
     
    <label htmlFor="email">Email</label>
    <input 
    type="email" 
    placeholder="sky@gmail.com" 
    value={formData.email} 
    onChange={handleInputChange} 
    id="email"
    name="email"
    />
    <label htmlFor="username">Username</label>
    <input 
    type="text" 
    placeholder="Username" 
    value={formData.username} 
    onChange ={handleInputChange} 
    id="username"
    name="username"
    />
    <label htmlFor="password">Password</label>
    <input 
    type="password"
    placeholder="password"
    value={formData.password}
    onChange={handleInputChange}
    name="password"/>
    <button id="submit">Sign Up</button>
    </form>
     <p>Already have an account? <Link to="/Login">login</Link></p>
    </div>
    
   
    );
}