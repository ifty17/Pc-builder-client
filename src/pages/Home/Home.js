import React from 'react';
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
        </div>
    );
};

export default Home;