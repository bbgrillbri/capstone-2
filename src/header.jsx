import { Link } from "react-router-dom";
import React from "react";
import { ShoppingBag } from "phosphor-react";
import { ShoppingCart } from "phosphor-react"
import { UserRectangle } from "phosphor-react"
import "./app.css"

const Header = () =>  {
    return (
        <header className="header">
            <div>
                <h1 className="ShopTitle">Shop Name</h1>
                 <div id="links">
                    <Link className="home" to="/login"><UserRectangle size={32}/></Link>
                    <Link className="shopping" to="/"><ShoppingBag size={32}/></Link>
                    <Link className="shoppinCart" to="/cart"><ShoppingCart size={32} /></Link>
            </div>
            </div>
           
        </header>
    );
};

export default Header;