import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';
import Product from './Product';

const Products = () => {
  const components = useLoaderData();
  const [bookingProduct, setBookingProduct] = useState(null);
  console.log(components);
  return (
    <section>
      <div>
        {components?.map((component) => (
          <Product
            key={component._id}
            component={component}
            setBookingProduct={setBookingProduct}
          ></Product>
        ))}
      </div>
      {
        <Modal
        bookingProduct={bookingProduct}
        setBookingProduct={setBookingProduct}
        ></Modal>
      }
    </section>
  );
};

export default Products;