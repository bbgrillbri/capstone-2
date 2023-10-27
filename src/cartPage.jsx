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
              <button onClick={() => removeFromCart(item)}>-</button>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <p>Total: ${getCartTotal()}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
