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


//limit results 

async function fetchLimitedProducts(limit) {
    try {
        const response = await fetch(`${BASE_URL}/products?limit=${limit}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch products. Status: ${response.status}`);
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}
//test
fetchLimitedProducts(10)
  .then(products => {
    console.log("Products Data:", products);
  })
  .catch(error => {
    console.error("Error:", error);
  });



//sort results 
//fetch('https://fakestoreapi.com/products?sort=desc')
async function sortProducts(sort) {
    try {
        const response = await fetch(`${BASE_URL}/products?sort=${sort}`, {
          headers: {
            "Content-Type": "application/json"
          }  
        });
        if (!response.ok) {
            throw new Error(`Faild to fetch products. Status: ${response.status}`);
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Test sorting products in descending order
sortProducts("desc")
  .then(products => {
    console.log("Sorted Products (Descending):", products);
  })
  .catch(error => {
    console.error("Error:", error);
  });


//all categories 
//fetch('https://fakestoreapi.com/products/categories')


//products in a specific category
//fetch('https://fakestoreapi.com/products/category/jewelery')

//add new product 
//fetch('https://fakestoreapi.com/products'



//update product
//fetch('https://fakestoreapi.com/products/7',{


//delete product 
//fetch('https://fakestoreapi.com/products/6'


//get all carts 


//single cart 
//fetch('https://fakestoreapi.com/carts/5')


//limit  cart result 
//fetch('https://fakestoreapi.com/carts?limit=5')


//sort cart results 
//fetch('https://fakestoreapi.com/carts?sort=desc')


//carts in date range
//fetch('https://fakestoreapi.com/carts?startdate=2019-12-10&enddate=2020-10-10')


//user cart
//fetch('https://fakestoreapi.com/carts/user/2')


//add new product to cart 
//fetch('https://fakestoreapi.com/carts',{
 
//update cart product 
//fetch('https://fakestoreapi.com/carts/7',{



//delete a cart 
//fetch('https://fakestoreapi.com/carts/6',{


//get all users 
//fetch('https://fakestoreapi.com/users')


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

//limit user results 
//fetch('https://fakestoreapi.com/users?limit=5')


//sort user results 
//fetch('https://fakestoreapi.com/users?sort=desc')


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

//update user 
//fetch('https://fakestoreapi.com/users/7',{


//delete a user 
//fetch('https://fakestoreapi.com/users/6',{


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


