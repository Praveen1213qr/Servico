import "./NavBar.css";
import logo from "./image/logo.jpg";

export default function NavBar() {
    return (
        <>
        <div className="navbar">
       <img id="logo" src={logo} alt="Servico"/>
        {/* <a href="">HouseHold</a>
        <a href="">Domestic</a>  */}
        <li><input  type="text" placeholder="Services"/><button id="search">Search</button></li>
        <a href="./signup.html">
        <button id="signup">Sign Up</button></a>
        <a href="./login.html">
        <button id="login">Login</button></a>
        <a href="?">Profile</a>
    </div>
        </>
    );
}