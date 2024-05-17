import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext); 

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="" />
                    <img src={Logo} alt="" />
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
