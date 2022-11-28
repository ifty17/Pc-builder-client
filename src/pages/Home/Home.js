import React from 'react';
import Advertised from './Advertised/Advertised';
import Category from './Category/Category';
import Footer from './Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import Navbar from './Navbar/Navbar';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <HeroSection></HeroSection>
            <Advertised></Advertised>
        </div>
    );
};

export default Home;