import React, { useState, useEffect } from "react";
import {
  getAllCarts,
  createCart,
  updateCart,
  deleteCartById,
} from "./api/main";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [newCartItem, setNewCartItem] = useState({
    productId: "",
    quantity: 1,
  });

  useEffect(() => {
    fetchCarts();
  }, []);

  const fetchCarts = async () => {
    try {
      const data = await getAllCarts();
      setCarts(data);
    } catch (error) {
      console.error("error fetching carts:", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      const createdCart = await createCart(newCartItem);
      setCarts([...carts, createdCart]); // Fixed the typo here
      setNewCartItem({
        productId: "",
        quantity: 1,
      });
    } catch (error) {
      console.error("error adding to cart:", error);
    }
  };

  const handleDeleteCartItem = async (cartId) => {
    try {
      await deleteCartById(cartId);
      setCarts(carts.filter((cart) => cart._id !== cartId));
    } catch (error) {
      console.error(`error deleting cart item (${cartId}):`, error);
    }
  };

  const handleUpdateQuantity = async (cartId, newQuantity) => {
    try {
      const updatedCart = await updateCart(cartId, { quantity: newQuantity });
      const updatedCarts = carts.map((cart) =>
        cart._id === cartId ? updatedCart : cart
      );
      setCarts(updatedCarts);
    } catch (error) {
      console.error(`error updating quantity for cart item (${cartId}):`, error);
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {carts.map((cart) => (
          <li key={cart._id}>
            Product ID: {cart.productId}, Quantity: {cart.quantity}
            <button onClick={() => handleUpdateQuantity(cart._id, cart.quantity + 1)}>+</button>
            <button onClick={() => handleUpdateQuantity(cart._id, cart.quantity - 1)}>-</button>
            <button onClick={() => handleDeleteCartItem(cart._id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <label>
          Product ID:
          <input
            type="text"
            value={newCartItem.productId}
            onChange={(e) =>
              setNewCartItem({ ...newCartItem, productId: e.target.value })
            }
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={newCartItem.quantity}
            onChange={(e) =>
              setNewCartItem({ ...newCartItem, quantity: e.target.value })
            }
          />
        </label>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cart;
