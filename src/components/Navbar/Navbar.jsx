import { NavLink } from "react-router";
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className="nav-bar">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><button>Download Resume</button></li>
                </ul>
            </nav>
        </>
    )
}