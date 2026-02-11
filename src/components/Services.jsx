import React from 'react';
import { services } from '../mockData';
import { UtensilsCrossed, ShoppingBag, Bike, Calendar } from 'lucide-react';

const iconMap = {
  UtensilsCrossed: UtensilsCrossed,
  ShoppingBag: ShoppingBag,
  Bike: Bike,
  Calendar: Calendar
};

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#61525a] mb-4">
            How We Serve You
          </h2>
          <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
            Choose the way that works best for you
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={index}
                className="bg-[#f7f5f2] rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow">
                  <IconComponent className="w-8 h-8 text-[#61525a]" />
                </div>
                <h3 className="text-xl font-bold text-[#61525a] mb-3">{service.name}</h3>
                <p className="text-[#736c64]">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
