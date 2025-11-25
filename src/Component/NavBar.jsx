import "./NavBar.css";
import logo from "./image/logo.jpg";
import {Link} from 'react-router-dom'



    export default function NavBar() {
       

    
    return (
        <>
        <div className="navbar">
            <Link to ="/">
       <img id="logo" src={logo} alt="Servico" />
       </Link>
        
       <ul>
         <li>
            <input  type="text" placeholder="Services"/>
            <button id="search">Search</button>
            </li> 
            </ul>

            

            <Link to="/signup">
            <button id="signup">Sign Up</button></Link>                
        
        
        <Link to="/login">
            <button id="login">Login</button></Link> 
       
    </div>
    
     </>   
    );

}