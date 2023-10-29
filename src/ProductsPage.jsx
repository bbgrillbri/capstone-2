import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "./api/main.js";
import { CartContext } from "./cart.jsx";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';


const DisplayProducts = () => {
    const [products, setProducts] = useState([]); 
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        async function getAllProducts() {
          try {
            const response = await fetchProducts();
            console.log("API Response:", response); // Log the API response

            if (Array.isArray (response)) {
              setProducts(response);
              setIsLoading(false);
            } else {
              throw new Error("Invalid API response format");
            }
          } catch (error) {
            console.error("Error fetching products:", error);
            setError(error);
            setIsLoading(false);
          }
        }
        getAllProducts();
      }, []);

      const { addToCart } = useContext(CartContext)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error; {error.message}</p>
    }

    return (
      <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp">
              <div className="advisor_thumb">
                <img className="photo" src={product.image} alt={product.title} />
              </div>
              <div className="single_advisor_details_info">
                <h6>{product.title}</h6>
                <p className="designation">{product.description}</p>
                <button className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ); 
};

export default DisplayProducts;