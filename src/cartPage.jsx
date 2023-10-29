import React, { useContext } from "react";
import { CartContext } from "./cart.jsx";

import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Navigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, addToCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <p className="cartEmpty">Your cart is empty.</p>;
  }

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                {cartItems.map((item) => (
                  <MDBCol md="2" lg="2" xl="2" key={item.id}>
                    <MDBCardImage
                      src={item.image}
                      fluid
                      className="rounded-3"
                      alt={item.title}
                    />
                  </MDBCol>
                ))}
              </MDBRow>
              <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                {cartItems.map((item) => (
                  <MDBCol md="3" lg="3" xl="3" key={item.id}>
                    <MDBTypography tag="h6" className="text-muted">
                      {item.category}
                    </MDBTypography>
                    <MDBTypography tag="h6" className="text-black mb-0">
                      {item.title}
                    </MDBTypography>
                  </MDBCol>
                ))}
              </MDBRow>
              <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                {cartItems.map((item) => (
                  <MDBCol md="3" lg="3" xl="3" key={item.id} className="d-flex align-items-center">
                    <MDBInput type="number" min="0" defaultValue={item.quantity} size="sm" />
                  </MDBCol>
                ))}
              </MDBRow>
              <hr className="my-4" />
              <div className="pt-5">
                <MDBTypography tag="h6" className="mb-0">
                  <a href="#!" className="text-body">
                  </a>
                  <button className="btn btn-primary" onClick={clearCart}>Clear Cart</button>
                </MDBTypography>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default CartPage;

