import Login from "./login.jsx";
import Signup from "./Signup";
import Profile from "./Profile.jsx";
import ProductsPage from "./ProductsPage.jsx";
import { Routes, Route } from "react-router-dom";
import Header from "./header.jsx";
import { useEffect, useState } from "react";
import { fetchProducts } from "./api/main.js";
import Cart from "./cart.jsx";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        const fetchedProducts = response.data.products;
        setProducts(fetchedProducts);
      })
      .catch((error) => {
        console.error("error fetching products", error);
      });
    }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart products={products} />} />
      </Routes>
    </div>
  );
}
