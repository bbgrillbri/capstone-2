import { Link } from "react-router-dom";
import React from "react";
import { Rectangle, ShoppingBag } from "phosphor-react";
import { ShoppingCart } from "phosphor-react"
import { UserRectangle } from "phosphor-react"
import "./app.css"

const Header = () =>  {
    return (
        <header>
            <div id="navbar">
                 <div id="links">
                    <Link to="/login"><UserRectangle size={32}/></Link>
                    <Link to="/"><ShoppingBag size={32}/></Link>
                    <Link to="/cart"><ShoppingCart size={32} /></Link>
                    

            </div>
            </div>
           
        </header>
    );
};

export default Header;