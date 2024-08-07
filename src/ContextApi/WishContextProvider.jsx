import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const WishContext = createContext();

const WishContextProvider = ({ children }) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  

  // Add to Wishlist
  const addToWish = async (productId, price, discountprice, category, image) => {
    
      try {
        const response = await axios.post(
          "http://localhost:5300/wishRouter/addwish",
          {
            price, 
            discountprice,
             category, 
             image, 
             productId },
          { headers: { Authorization: 
            localStorage.getItem("token")
         } }
        );
        if (response.status === 201) {
          alert("Added to Wish");
          fetchCount(); 
        }
      } catch (error) {
        console.error("Failed to add to wish:", error);
        alert("Failed to add to wish. Maybe it's already in the wish.");
      }
  
  };

  // Remove from Wishlist
  const removeFromWish = async (productId) => {

      try {
        const response = await axios.post(
          "http://localhost:5300/wishRouter/removeWishlist",
          { productId },
          { headers: { 
            Authorization: localStorage.getItem("token") 
        } }
        );
        if (response.status === 200) {
          alert("Removed from Wish");
          fetchCount(); 
        }
      } catch (error) {
        console.error("Error removing from wish:", error.response?.data || error);
        alert("Failed to remove from wish.");
      }
    
  };

  // Fetch Wishlist Count
  const fetchCount = async () => {

      try {
        const response = await axios.get("http://localhost:5300/wishRouter/count", {
          headers: { Authorization: localStorage.getItem("token") }
        });
        if (response.data && typeof response.data.count === 'number') {
          setWishlistCount(response.data.count);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching wishlist count:", error);
      }
    
  };

  // Check Wishlist Status for a Product
  const checkWishStatus = async (productId) => {
 
      try {
        const response = await axios.get(
          `http://localhost:5300/wishRouter/checkStatus/${productId}`,
          { headers: { Authorization:localStorage.getItem("token") } }
        );
        return response.data.isLiked;
      } catch (error) {
        console.error("Error checking wish list status:", error);
        return false;
      }
 
  };

  useEffect(() => {
    fetchCount(); // Fetch count on mount
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setWishlistCount(0); 
    
  };

  return (
    <WishContext.Provider value={{ wishlistCount, addToWish, removeFromWish, checkWishStatus,setWishlistCount }}>
      {children}
    </WishContext.Provider>
  );
};

const useWish = () => {
  const context = useContext(WishContext);
  if (!context) {
    throw new Error('useWish must be used within a WishContextProvider');
  }
  return context;
};

export { WishContextProvider, useWish };
