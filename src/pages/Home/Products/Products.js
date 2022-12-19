import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Spinner from '../../Components/Spinner';
import Modal from './Modal';
import ModalLg from './ModalLg';
import Product from './Product';

const Products = () => {
  const components = useLoaderData();
  const [bookingProduct, setBookingProduct] = useState(null);
  const [bookedProductLg, setBookedProductLg] = useState(null);
  console.log(bookedProductLg);
  // console.log(components);


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
            {
              components?.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:gap-5">
              {components?.map((component) => (
                <Product
                  key={component._id}
                  component={component}
                  setBookingProduct={setBookingProduct}
                ></Product>
              ))}
            </div>: <Spinner></Spinner>
            }
            {bookingProduct && (
              <Modal
                bookingProduct={bookingProduct}
                setBookingProduct={setBookingProduct}
              ></Modal>
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

      <section className="hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:gap-5">
          {components?.map((component) => (
            <Product
              key={component._id}
              component={component}
              setBookedProductLg={setBookedProductLg}
            ></Product>
          ))}
        </div>
        {bookedProductLg && (
          <ModalLg
            bookedProductLg={bookedProductLg}
            setBookedProductLg={setBookedProductLg}
          ></ModalLg>
        )}
      </section>
    </div>
  );
};

export default Products;