import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "./api/main.js";
import { CartContext } from "./cart.jsx";
import { useContext } from "react";





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
         <div className="overlay">
        {products.map((product) => (
          <div key={product.id}>
            <img className="photo" src={product.image} alt={product.title} />
            <h2 className="title">{product.title}</h2>
            <h3 className="price">{product.price}</h3>
            <button className="addToCart" onClick={() => addToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
      </div>
       
    );
};

export default DisplayProducts;