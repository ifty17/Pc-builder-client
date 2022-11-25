import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
  const components = useLoaderData();
  console.log(components);
  return (
    <div>
        {
            components?.map(component => <Product
            key={component._id}
            component={component}
            >
            </Product>)
        }
    </div>
  );
};

export default Products;