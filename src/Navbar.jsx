import React, { useState } from 'react';
import './Navbar.css';
import pizza from "../src/Images/pizza-64.gif";
import { Link } from 'react-router-dom';


const Navbar = () => {
//  *************** Use React Hooks {UseState}   ***************//
    const [isMobile, setIsMobile] = useState(false);

    return (
//       ************** Navbar start ***************//
        <nav className="navbar">

            <Link className="pick" to="/service">

                <img src={pizza} alt="my logo" /></Link>

            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => setIsMobile(false)}>

                <Link to="/home" className="list">
                    <li>Home</li>
                </Link>

                <Link to="/about" className="list">
                    <li>About</li>
                </Link>

                <Link to="/service" className="list">
                    <li>Service</li>
                </Link>

                <Link to="/special" className="list">
                    <li>Special</li>
                </Link>

                <Link to="/order" className="list">
                    <li>Order Now</li>
                </Link>

            </ul>
       
            <button className="mobile-menu-icon"

                onClick={() => setIsMobile(!isMobile)}>

                {isMobile ? (<i className="fas fa-times"></i>
                ) : (
                    <i className="fas fa-bars"></i>
                )}

            </button>
        </nav>
    
   //       ************** Navbar end ***************// 

    )
}

export default Navbar;
