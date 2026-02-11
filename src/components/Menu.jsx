import React, { useState } from 'react';
import { menuCategories } from '../mockData';
import { ChevronRight } from 'lucide-react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0]);

  return (
    <section id="menu" className="py-20 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#61525a] mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
            Explore our selection of premium coffee, freshly baked pastries, and delicious meals
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory.id === category.id
                  ? 'bg-[#61525a] text-white shadow-lg scale-105'
                  : 'bg-white text-[#736c64] hover:bg-[#61525a] hover:text-white shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Selected Category Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Category Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
            <img
              src={selectedCategory.image}
              alt={selectedCategory.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">{selectedCategory.name}</h3>
              <p className="text-lg text-white/90">{selectedCategory.description}</p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-4">
            {selectedCategory.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102 group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-[#61525a] group-hover:text-[#8B7355] transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-xl font-bold text-[#61525a]">{item.price}</span>
                </div>
                <p className="text-[#736c64]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#61525a] mb-4">
            Want to see our full menu?
          </h3>
          <p className="text-[#736c64] mb-6">
            Call us or visit our cafe to discover all our delicious offerings
          </p>
          <a
            href="tel:0977 023 3628"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#61525a] text-white rounded-lg font-semibold hover:bg-[#4a3f47] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Call to Order</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
