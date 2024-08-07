import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartlistCount, setCartlistCount] = useState(0);


  async function addToCart(product) {
      try {
        const response = await axios.post(
          "http://localhost:5300/cartRouter/addcart",
          {
            
            price: product.price,
            discountprice:product.discountprice,
            category: product.category,
            image: product.image,
            productId: product.productId
          },
          { headers: { Authorization: 
            localStorage.getItem("token")
         } }
        );
        if (response.status === 201) {
          alert("Added to Cart");
          fetchCount(); 
        }
      } catch (error) {
        console.error("Failed to add to cart:", error);
        alert("Failed to add to wish. Maybe it's already in the cart.");
      }
  
  };

  // Remove from Wishlist
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
        }
      } catch (error) {
        console.error("Error removing from wish:", error.response?.data || error);
        alert("Failed to remove from cart.");
      }
    
  };

  // Fetch Wishlist Count
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
        console.error("Error fetching cartlist count:", error);
      }
    
  };


  useEffect(() => {
    fetchCount();
  }, []);




  return (
    <CartContext.Provider value={{ cartlistCount,setCartlistCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('usecart must be used within a CartContextProvider');
  }
  return context;
};

export { CartContextProvider, useCart };
