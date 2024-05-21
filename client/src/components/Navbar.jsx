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
                    <img src={Logo} alt="logo" />
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>Tutorias</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>Projetos</h6>
                    </Link>
                    <Link className="link" to="/?cat=cinema">
                        <h6>Sobre mim</h6>
                    </Link>
                    <span>{currentUser?.username}</span>
                    {currentUser ? 
                        (<span onClick={logout}>Logout</span>) : 
                        (<Link className="link" to="/login">Login</Link>)
                    }
                    <span className="write">
                        <Link className="link" to="/write">Criar</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
