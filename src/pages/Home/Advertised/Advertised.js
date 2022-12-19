import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Spinner from '../../Components/Spinner';
import AdvModal from './AdvModal';
import AdvProduct from './AdvProduct';

const Advertised = () => {

    const [bookedProduct, setBookedProduct] = useState(null);

    const {data: advertisedProducts = [] } = useQuery({
      queryKey: ['advproduct'],
      queryFn: async () => {
        const res = await fetch("https://y-eta-one.vercel.app/advproduct");
        const data = await res.json();
        return data;
      },
    });
    console.log(advertisedProducts);

    return (
      <section>
        <h1 className="text-3xl text-center font-bold pt-10">
          Featured Products
        </h1>
        {
          advertisedProducts?.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:gap-5 ">
          {advertisedProducts?.map((products) => (
            <AdvProduct
              key={products._id}
              products={products}
              setBookedProduct={setBookedProduct}
            ></AdvProduct>
          ))}
        </div> : <Spinner></Spinner>
        }
        {bookedProduct && (
          <AdvModal
            bookedProduct={bookedProduct}
            setBookedProduct={setBookedProduct}
          ></AdvModal>
        )}
      </section>
    );
};

export default Advertised;