import React, {useState} from 'react';
import {Phone, Facebook, MapPin, Clock, Star} from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Services from '../components/Services';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {cafeInfo} from '../data/cafeInfo';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#f7f7f2]">
            <Header />
            <Hero />
            <About />
            <Menu />
            <Services />
            <Amenities />
            <Gallery />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;