import { Link } from 'react-router-dom'
import './signup.css'
import { useState } from 'react'
export default function Login() {
  let [formData, setFormData] = useState({
    email: "",
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
      password: ""
    });
  };
return (
    
    <div className="signup">
        <form onSubmit={handleSubmit} >
      <h2>Login </h2>
     
    <label htmlFor="text">Email</label>
    <input 
    type="email" 
    placeholder="sidd@gmail.com" 
    value={formData.email}
    onChange={handleInputChange}
    id="email"
    name="email"
    />
    
    <label htmlFor="password">Password</label>
    <input 
    type="password"
    placeholder="password"
    value={formData.password}
    onChange={handleInputChange}
    name="password"
    />
    <button id="submit">Log In</button>
    </form>
     <p>Don't have an account? <Link to="/SignUp">Register</Link></p>
    </div>
    
)

}
