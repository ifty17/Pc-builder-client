import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Advertised from './Advertised/Advertised';
import Category from './Category/Category';
import Footer from './Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import Slider from './Slider/Slider';
import SliderLg from './Slider/SliderLg';

const Home = () => {
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
          <div className="drawer-content">
            <Slider></Slider>
            <Category></Category>
            <HeroSection></HeroSection>
            <Advertised></Advertised>
            <Footer></Footer>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>{navItems}</li>
            </ul>
          </div>
        </div>
        <div className='hidden sm:hidden lg:block'>
          <SliderLg></SliderLg>
          <Category></Category>
          <HeroSection></HeroSection>
          <Advertised></Advertised>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Home;