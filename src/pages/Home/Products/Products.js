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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:gap-5">
        {components?.map((component) => (
          <Product
            key={component._id}
            component={component}
            setBookingProduct={setBookingProduct}
          ></Product>
        ))}
      </div>
      {bookingProduct && (
        <Modal
          bookingProduct={bookingProduct}
          setBookingProduct={setBookingProduct}
        ></Modal>
      )}
    </section>
  );
};

export default Products;