// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const CartContext = createContext();

// const CartContextProvider = ({ children }) => {
//   const [cartlistCount, setCartlistCount] = useState(0);


//   // async function addToCart(product) {
//   //     try {
//   //       const response = await axios.post(
//   //         "http://localhost:5300/cartRouter/addcart",
//   //         {
            
//   //           price: product.price,
//   //           discountprice:product.discountprice,
//   //           category: product.category,
//   //           image: product.image,
//   //           productId: product.productId
//   //         },
//   //         { headers: { Authorization: 
//   //           localStorage.getItem("token")
//   //        } }
//   //       );
//   //       if (response.status === 201) {
//   //         alert("Added to Cart");
//   //         fetchCount(); 
//   //       }
//   //     } catch (error) {
//   //       console.error("Failed to add to cart:", error);
//   //       alert("Failed to add to cart. Maybe it's already in the cart.");
//   //     }
  
//   // };

//   async function addToCart(product, quantity) {
//     try {
//       const response = await axios.post(
//         "http://localhost:5300/cartRouter/addcart",
//         {
//           price: product.price,
//           discountprice: product.discountprice,
//           category: product.category,
//           image: product.image,
//           productId: product.productId,
//           quantity // Send quantity to backend
//         },
//         {
//           headers: { Authorization: localStorage.getItem("token") }
//         }
//       );
//       if (response.status === 201) {
//         alert("Added to Cart");
//         fetchCount();
//       }
//     } catch (error) {
//       console.error("Failed to add to cart:", error);
//       alert("Failed to add to cart. Maybe it's already in the cart.");
//     }
//   }

//   // Remove from Wishlist
//   const removeFromCart = async (productId) => {

//       try {
//         const response = await axios.post(
//           "http://localhost:5300/cartRouter/removeCart",
//           { productId },
//           { headers: { Authorization: localStorage.getItem("token") } }
//         );
//         if (response.status === 200) {
//           alert("Removed from cart");
//           fetchCount(); 
//         }
//       } catch (error) {
//         console.error("Error removing from wish:", error.response?.data || error);
//         alert("Failed to remove from cart.");
//       }
    
//   };

//   // Fetch Wishlist Count
//   const fetchCount = async () => {

//       try {
//         const response = await axios.get("http://localhost:5300/cartRouter/count", {
//           headers: { Authorization: localStorage.getItem("token") }
//         });
//         if (response.data && typeof response.data.count === 'number') {
//           setCartlistCount(response.data.count);
//         } else {
//           console.error("Unexpected response format:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching cartlist count:", error);
//       }
    
//   };


//   useEffect(() => {
//     fetchCount();
//   }, []);


//   async function handleorder(){
//     try{
//       const orders = await axios.post("http://localhost:5300/cartRouter/order",carts,{
//         headers:{
//           Authorization: localStorage.getItem("token")
//         }
//       })
//       localStorage.removeItem("cart")
//       alert("completed order");
//       navigate("/")
//     }catch(error){
//       console.log(error);

//     }
//   }

//   return (
//     <CartContext.Provider value={{ cartlistCount,setCartlistCount, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('usecart must be used within a CartContextProvider');
//   }
//   return context;
// };

// export { CartContextProvider, useCart };


import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartlistCount, setCartlistCount] = useState(0);
  const [carts, setCarts] = useState([]); 

  // Function to add item to the cart
  async function addToCart(product, quantity) {
    try {
      const response = await axios.post(
        "http://localhost:5300/cartRouter/addcart",
        {
          price: product.price,
          discountprice: product.discountprice,
          category: product.category,
          image: product.image,
          productId: product.productId,
          quantity
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      if (response.status === 201) {
        alert("Added to Cart");
        fetchCount();
        fetchCart(); // Fetch updated cart items
      }
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Failed to add to cart. Maybe it's already in the cart.");
    }
  }

  // Function to remove item from the cart
  const removeFromCart = async (productId) => {
    try {
      const response = await axios.post(
        "http://localhost:5300/cartRouter/removeCart",
        { productId },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      if (response.status === 200) {
        alert("Removed from cart");
        fetchCount();
        fetchCart(); // Fetch updated cart items
      }
    } catch (error) {
      console.error("Error removing from cart:", error.response?.data || error);
      alert("Failed to remove from cart.");
    }
  };

  // Fetch cart count
  const fetchCount = async () => {
    try {
      const response = await axios.get("http://localhost:5300/cartRouter/count", {
        headers: { Authorization: localStorage.getItem("token") }
      });
      if (response.data && typeof response.data.count === 'number') {
        setCartlistCount(response.data.count);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  // Fetch cart items
  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:5300/cartRouter/cart", {
        headers: { Authorization: localStorage.getItem("token") }
      });
      setCarts(response.data.items || []);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  // Handle order completion
  const Order= async()=> {
    try {
      const response = await axios.post(
        "http://localhost:5300/cartRouter/order",
        { ...form, orders: carts },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      if (response.status === 200) {
        localStorage.removeItem("cart");
        setCarts([]); 
        fetchCount(); 
        alert("Order completed");
      } else {
        throw new Error('Failed to create order');
      }
    } catch (error) {
      console.error('Error during order creation:', error);
      alert('Failed to create order');
    }
  }

  useEffect(() => {
    fetchCount();
    fetchCart(); 
  }, []);

  

  return (
    <CartContext.Provider value={{ cartlistCount, setCartlistCount, addToCart, removeFromCart, Order,fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }
  return context;
};

export { CartContextProvider, useCart };
