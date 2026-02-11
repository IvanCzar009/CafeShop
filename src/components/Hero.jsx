import React from 'react';
import { Coffee, Phone, Facebook, Star } from 'lucide-react';
import { cafeInfo } from '../mockData';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1481833761820-0509d3217039"
          alt="Cozy cafe interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Rating Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg animate-fade-in">
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <span className="font-bold text-[#61525a] text-lg">{cafeInfo.rating}</span>
          <span className="text-[#736c64]">★ Rating</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
          {cafeInfo.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {cafeInfo.tagline}
        </p>
        
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          A cozy spot for great coffee, delicious desserts, and the perfect place to work or hang out
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => scrollToSection('menu')}
            className="px-8 py-4 bg-white text-[#61525a] rounded-lg font-semibold text-lg hover:bg-[#f7f5f2] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
          >
            View Menu
          </button>
          <a
            href={`tel:${cafeInfo.phone}`}
            className="px-8 py-4 bg-[#61525a] text-white rounded-lg font-semibold text-lg hover:bg-[#4a3f47] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            <span>Call to Order</span>
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-[#61525a] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Reserve a Table
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Coffee className="w-8 h-8 text-[#61525a] mx-auto mb-3" />
            <p className="font-bold text-[#61525a] mb-1">Opening Hours</p>
            <p className="text-[#736c64]">{cafeInfo.hours}</p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Phone className="w-8 h-8 text-[#61525a] mx-auto mb-3" />
            <p className="font-bold text-[#61525a] mb-1">Contact Us</p>
            <p className="text-[#736c64]">{cafeInfo.phone}</p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-3xl mx-auto mb-3 block">₱</span>
            <p className="font-bold text-[#61525a] mb-1">Price Range</p>
            <p className="text-[#736c64]">{cafeInfo.priceRange}</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
