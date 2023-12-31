import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
const BASE_URL = `https://fakestoreapi.com`



//all products 
export async function fetchProducts() {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            headers: {
                "Content-Type": "application/json", 
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch products. Satatus: ${response.status}`);
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error("error fetching products:", error);
        throw error;
    }
}
//test 
fetchProducts()
  .then(products => {
    console.log("Products Data:", products);
    // You can now use the products data as needed
  })
  .catch(error => {
    console.error("Error:", error);
  });

//single product 
 async function fetchSingleProduct(productId) {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`);
        if (!response.ok) {
            throw new Error(`Failded to fetch product. Status: ${response.status}`);
        }
        const productData = await response.json();
        return productData;
    } catch (error) {
        console.error("error fetching product", error);
    }
 };
 //test
 fetchProducts()
  .then(products => {
    console.log("Products Data:", products);
    // You can now use the products data as needed
  })
  .catch(error => {
    console.error("Error:", error);
  });

//delete product 
//fetch('https://fakestoreapi.com/products/6'
export async function removeFromCart(cartId, itemId) {
  try {
    const response = await fetch(`${BASE_URL}/carts/${cartId}/items/${itemId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to remove item from cart. Status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error removing item from cart (cart ID: ${cartId}, item ID: ${itemId}):`, error);
    throw error;
  }
}

//get all carts 
export async function getAllCarts() {
  try {
    const response = await fetch(`${BASE_URL}/carts`);
    if (!response.ok) {
      throw new Error(`Failed to fetch carts. status: ${response.status}`);
    }
    const carts= await response.json();
    return carts;
  } catch (error) {
    console.error("Error fetching carts:", error); 
    throw error;
  }
}

//single cart 
//fetch('https://fakestoreapi.com/carts/5')
export async function getCartById(cartId) {
  try {
    const respose = await fetch(`${BASE_URL}/carts/${cartId}`);
    if (!respose.ok) {
      throw new Error(`error fetching cart. status: ${respose.status}`);
    } 
    const cart = await respose.json(); 
    return cart;
  } catch (error) {
    console.error(`error fetching cart with id ${cartId}`, error);
    throw error;
  }
}

//create new cart
export async function createCart(newCartData) {
  try {
    const response = await fetch(`${BASE_URL}/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCartData),
    });
    if (!response.ok) {
      throw new Error(`Failed to create a new cart. Status: ${response.status}`);
    }
    const createdCart = await response.json();
    return createdCart;
  } catch (error) {
    console.error("Error creating a new cart:", error);
    throw error;
  }
}

//update existing cart 
export async function updateCart(cartId, updatedCartData) {
  try {
    const response = await fetch(`${BASE_URL}/carts/${cartId}`, {
      method: "PUT", // Use the appropriate HTTP method for updating
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCartData),
    });
    if (!response.ok) {
      throw new Error(`Failed to update cart. Status: ${response.status}`);
    }
    const updatedCart = await response.json();
    return updatedCart;
  } catch (error) {
    console.error(`Error updating cart with ID ${cartId}:`, error);
    throw error;
  }
}

//delete a cart 
//fetch('https://fakestoreapi.com/carts/6',{
  export async function deleteCartById(cartId) {
    try {
      const response = await fetch(`${BASE_URL}/carts/${cartId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Failed to delete cart. Status: ${response.status}`);
      }
      // No need to return anything on successful deletion
    } catch (error) {
      console.error(`Error deleting cart with ID ${cartId}:`, error);
      throw error;
    }
  }

//get single user 
export const myData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };  

//add new user 
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};       

//user login 
export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result;

    
  } catch (err) {
    console.error(err);
  }
};


