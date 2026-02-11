import React, { useState } from 'react';
import { MapPin, Phone, Clock, Facebook, Mail, Send } from 'lucide-react';
import { cafeInfo } from '../mockData';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Reservation submitted:', formData);
    toast({
      title: "Reservation Request Sent!",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#61525a] mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
            We'd love to see you at our cafe. Reserve a table or just drop by!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d121.0!3d13.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzAwLjAiTiAxMjHCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Knead & Brew Location"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f7f5f2] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#61525a]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#61525a] mb-2">Address</h3>
                    <p className="text-[#736c64]">{cafeInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f7f5f2] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#61525a]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#61525a] mb-2">Opening Hours</h3>
                    <p className="text-[#736c64]">{cafeInfo.hours}</p>
                    <p className="text-sm text-[#736c64] mt-1">Open Daily</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f7f5f2] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#61525a]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#61525a] mb-2">Contact</h3>
                    <a href={`tel:${cafeInfo.phone}`} className="text-[#736c64] hover:text-[#61525a] transition-colors">
                      {cafeInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f7f5f2] rounded-full flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-6 h-6 text-[#61525a]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#61525a] mb-2">Follow Us</h3>
                    <a
                      href={cafeInfo.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#736c64] hover:text-[#61525a] transition-colors"
                    >
                      @KneadAndBrewBakeryCafe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#61525a] mb-6">
              Reserve a Table
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#61525a] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61525a] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#61525a] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61525a] transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#61525a] mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61525a] transition-all"
                    placeholder="09XX XXX XXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#61525a] mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61525a] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#61525a] mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61525a] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#61525a] mb-2">
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61525a] transition-all"
                >
                  <option value="">Select number of guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6+">6+ Guests</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#61525a] mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61525a] transition-all resize-none"
                  placeholder="Any special requirements or requests?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#61525a] text-white rounded-lg font-semibold hover:bg-[#4a3f47] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Reservation Request</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
