import { Link } from 'react-router-dom'
import './Style.css'

export default function Navbar() {
    return (
        <div>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/Services">Services</Link>
                <Link to="/contact">Contact</Link>
                
            </div>
            
            <div className="login">
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}