import { useState } from "react";
import "./navbar.scss";


const Navbar = () => {
    const [toggle, settoggle] = useState(false);

    const toggleHamMenu = () => {
        settoggle(!toggle);
    }

    return (
        <div className="navbar">
            <div className="nav-left">BookMyCollab</div>
            <div className="nav-right">
                <ul>
                    <li>What We Do</li>
                    <li>How It Works</li>
                    <li>Join Us As Brand</li>
                    <li>Join Us As Creater</li>
                </ul>
                <button className="nav-btn">Login</button>
            </div>
            <span onClick={toggleHamMenu} className="material-icons menu">{toggle ? "close" : "menu"}</span>

            {
                toggle && (
                    <div className="ham-menu">
                        <ul>
                            <li>What We Do</li>
                            <li>How It Works</li>
                            <li>Join Us As Brand</li>
                            <li>Join Us As Creater</li>
                        </ul>
                        <button className="nav-btn">Login</button>
                    </div>
                )
            }
        </div>
    )
}


export default Navbar;