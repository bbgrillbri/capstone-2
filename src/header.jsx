import { Link } from "react-router-dom";
import React from "react";

const Header = () =>  {
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token", token);
    };
    return (
        <header>
            <h1 id="ShopLinks">Come up with shop name later</h1>
            <div id="navbar">
                {token ? (
                    //if logged in shhow profile link
                    <>
                    <Link to="/profile">Profile</Link>
                    <Link to="/">Products</Link>
                    <button onClick={handleLogout}>Log Out</button>
                    </>
                ) : (
                    //if not logged in show log in link
                    <>
                    <Link to="/login">Log in</Link>
                    <Link to="/">Products</Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;