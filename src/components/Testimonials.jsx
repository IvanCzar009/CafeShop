import React from 'react';
import { testimonials } from '../mockData';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#61525a] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
            Real reviews from our wonderful community
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#f7f5f2] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12 text-[#61525a]" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-[#736c64] mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#61525a]">{testimonial.name}</p>
                  <p className="text-sm text-[#736c64]">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
