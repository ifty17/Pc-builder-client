import React, { useContext, useState } from 'react';
import {useQuery} from '@tanstack/react-query';
import AllProduct from './AllProduct';
import { Link, useSearchParams } from 'react-router-dom';
import BookingModal from './BookingModal';
import { AuthContext } from '../../../Context/AuthProvider';
import BookingModalLg from './BookingModalLg';

const AllProducts = () => {

  const [bookedProduct, setBookedProduct] = useState(null);
  const [bookedProductLg, setBookedProductLg] = useState(null);
  console.log(bookedProductLg);
  // console.log(bookedProduct);

    const {data: products = [] } = useQuery({
        queryKey:['products'],
        queryFn: async () =>{
            const res = await fetch("https://y-eta-one.vercel.app/products");
            const data = await res.json();
            return data;
        }
    });

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.error(error));
    };

    const navItems = (
      <React.Fragment>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">All Products</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>

        <li>
          {user?.uid ? (
            <>
              <Link to="/dashboard">Dashboard</Link>

              <button onClick={handleLogOut}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </React.Fragment>
    );

    return (
      <div>
        <div className="drawer lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content lg:hidden">
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:gap-5">
                {products.map((product) => (
                  <AllProduct
                    key={product._id}
                    product={product}
                    setBookedProduct={setBookedProduct}
                  ></AllProduct>
                ))}
              </div>
              {bookedProduct && (
                <BookingModal
                  bookedProduct={bookedProduct}
                  setBookedProduct={setBookedProduct}
                ></BookingModal>
              )}
            </section>
          </div>
          <div className="drawer-side lg:hidden">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>{navItems}</li>
            </ul>
          </div>
        </div>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:gap-5">
            {products.map((product) => (
              <AllProduct
                key={product._id}
                product={product}
                setBookedProductLg={setBookedProductLg}
              ></AllProduct>
            ))}
          </div>
          {bookedProduct && (
            <BookingModal
              bookedProduct={bookedProduct}
              setBookedProduct={setBookedProduct}
            ></BookingModal>
          )}
          {bookedProductLg && (
            <BookingModalLg
              bookedProductLg={bookedProductLg}
              setBookedProductLg={setBookedProductLg}
            ></BookingModalLg>
          )}
        </section>
      </div>
    );
};

export default AllProducts;