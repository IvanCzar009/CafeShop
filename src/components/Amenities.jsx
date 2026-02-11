import React from 'react';
import { amenities } from '../mockData';
import { Coffee, Cake, Laptop, Baby, Users, ParkingCircle, DoorOpen, Wifi } from 'lucide-react';

const iconMap = {
  Coffee: Coffee,
  Cake: Cake,
  Laptop: Laptop,
  Baby: Baby,
  Users: Users,
  ParkingCircle: ParkingCircle,
  DoorOpen: DoorOpen,
  Wifi: Wifi
};

const Amenities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#61525a] mb-4">
            Why Customers Love Us
          </h2>
          <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
            Everything you need for a perfect cafe experience
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon];
            return (
              <div
                key={index}
                className="bg-[#f7f5f2] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <IconComponent className="w-7 h-7 text-[#61525a]" />
                </div>
                <p className="font-semibold text-[#61525a]">{amenity.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
