import React, { useContext } from "react";
import { CartContext } from "./Cart.jsx";
import {
  MDBCard,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";


const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, getCartTotal, updateCart } = useContext(CartContext);

  const handleClearCartWithAlert = () => {
    clearCart(); 
    window.alert('Thanks for your purchase!');
  };

  if (cartItems.length === 0) {
    return <p className="cartEmpty">Your cart is empty.</p>;
  }

  return (
    <section className="cart-container">
      <MDBContainer>
        <MDBRow className="item-cards-container">
          {cartItems.map((item) => (
            <MDBCol key={item.id}>
              <MDBCard className="item-card">
              <div className="item-content">
              <MDBCardImage src={item.image} fluid alt={item.title} className="item-image" />
              <div className="item-details">
              <MDBTypography tag="h6">{item.category}</MDBTypography>
              <MDBTypography tag="h6">{item.title}</MDBTypography>
              <MDBTypography>${item.price.toFixed(2)}</MDBTypography>
            </div>
            </div> 
               <span>{item.quantity}</span>
                 <button className="btn btn-primary" onClick={() => updateCart(item, -1)} >-</button>
                 <button className="btn btn-primary" onClick={() => updateCart(item, 1)} >+</button>
                <button className="btn btn-primary" onClick={() => removeFromCart(item)}>Remove</button>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
        <hr />
        <div>
        <MDBTypography tag="h6">
            Total Price: ${getCartTotal().toFixed(2)}
          </MDBTypography>
          <MDBTypography tag="h6">
            <button className="btn btn-primary" onClick={clearCart}>
              Clear Cart
            </button>
          </MDBTypography>
          <MDBTypography tag="h6">
            <button className="btn btn-primary" onClick={handleClearCartWithAlert}>
             Check Out
            </button>
          </MDBTypography>
        </div>
      </MDBContainer>
    </section>
  );
};

export default CartPage;
