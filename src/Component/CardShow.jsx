import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

export const CardShow = () => {
  const [itemShow, setItemShow] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:5300/ProductRouter/getallproducts");
        setItemShow(response.data.products);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className=''>
    <div  
    
    className='grid grid-cols-1 md:grid-cols-3 gap-6  '
    >
      {itemShow.map((item) => (
        <div key={item._id}>
          <Card
            category={item.category}
            price={item.price}
            image={item.image}
            productId={item._id}
            discountprice={item.discountprice}
          />
        </div>
      ))}
    </div>
    </div>
  );
};
