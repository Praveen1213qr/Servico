import "./NavBar.css"
import { Link } from 'react-router-dom'
//import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6';
export default function Footer() {
    return (
        <div className="footer">
            <div className="company">
            <h3>Company</h3>
            <ul>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="">Careers</Link></li>
                <li><Link to="">Contact us</Link></li>
            </ul>
            </div>
             
            <div className="social">
            <h3>Social Links</h3>
            <ul>
                <li><Link to="Facebook">Facebook </Link></li>
                <li><Link to="Instagram">Instagram </Link></li>
                <li><Link to="Linkedln">Linkedln </Link></li>
                <li><Link to="X">FaTwitter </Link></li>
            </ul>
            </div>

        </div>
    );
}