import React from 'react';
import { Coffee, Award, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#61525a] leading-tight">
              About Knead & Brew
            </h2>
            <p className="text-lg text-[#736c64] leading-relaxed">
              Welcome to Knead & Brew Bakery Cafe, your cozy corner in the heart of Batangas City. 
              We're more than just a cafe – we're a community hub where great coffee, delicious desserts, 
              and warm hospitality come together.
            </p>
            <p className="text-lg text-[#736c64] leading-relaxed">
              Whether you're a student looking for the perfect study spot, a group of friends gathering 
              for brunch, or a solo diner enjoying a peaceful moment with your laptop, we've created a 
              space that welcomes everyone.
            </p>
            
            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#f7f5f2] rounded-lg flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-[#61525a]" />
                </div>
                <h3 className="font-bold text-[#61525a]">Premium Coffee</h3>
                <p className="text-sm text-[#736c64]">Expertly crafted from the finest beans</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#f7f5f2] rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#61525a]" />
                </div>
                <h3 className="font-bold text-[#61525a]">Fresh Pastries</h3>
                <p className="text-sm text-[#736c64]">Baked daily with love and care</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#f7f5f2] rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#61525a]" />
                </div>
                <h3 className="font-bold text-[#61525a]">Cozy Ambiance</h3>
                <p className="text-sm text-[#736c64]">Perfect atmosphere for work or relaxation</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#f7f5f2] rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#61525a]" />
                </div>
                <h3 className="font-bold text-[#61525a]">Everyone Welcome</h3>
                <p className="text-sm text-[#736c64]">Great for groups, families, and solo visits</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd"
                alt="Coffee and laptop"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              />
              <img
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
                alt="Coffee preparation"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1521917441209-e886f0404a7b"
                alt="Cafe interior"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              />
              <img
                src="https://images.unsplash.com/photo-1702742322469-36315505728f"
                alt="Fresh pastries"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
