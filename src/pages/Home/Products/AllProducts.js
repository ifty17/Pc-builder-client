import React from 'react';
import {useQuery} from '@tanstack/react-query';
import AllProduct from './AllProduct';

const AllProducts = () => {

    const {data: products = [] } = useQuery({
        queryKey:['products'],
        queryFn: async () =>{
            const res = await fetch("http://localhost:5000/products");
            const data = await res.json();
            return data;
        }
    })

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:gap-5">
        {products.map((product) => (
          <AllProduct key={product._id} product={product}></AllProduct>
        ))}
      </div>
    );
};

export default AllProducts;