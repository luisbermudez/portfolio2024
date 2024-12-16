import { NavLink } from "react-router";
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer>
                <h3>Luis Bermudez</h3>
                <h4>lapbermudez@gmail.com</h4>

                <ul className="footer-nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>

            </footer>
        </>
    )
}