import React, { useContext } from "react";
import { CartContext } from "./cart.jsx";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, getCartTotal, addToCart} = useContext(CartContext);

  if (cartItems.length === 0) {
    return <p className="cartEmpty">Your cart is empty.</p>;
  }

  return (
    <div className="container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img className="photo" src={item.image} alt={item.title} />
            <div>
              <h2 className="title">{item.title}</h2>
              <p className="price">Price: {item.price}</p>
              <p className="quantity">Quantity: {item.quantity}</p>
              <div className="cartbutton">
              <button className="button" onClick={() => removeFromCart(item)}>-</button>
              <button className="button1" onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="total">Total: ${getCartTotal()}</p>
      <button className="button" onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
