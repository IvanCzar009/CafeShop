import React, {useState, useEffect, use} from 'react';
import {Phone, Facebook, MapPin, Clock} from 'lucide-react';
import {cafeInfo} from '../mockData';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'start'});
            setIsMobileMenuOpen(false);
        }
    }; 

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-[#61525a] hover:text-[#8B7355] transition-colors cursor-pointer"
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                                Kneed & Brew
                            </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <button onClick={() => scrollToSection('about')} className="text-[#736c64] hover:text-[#61525a] transition-colors font-medium">
                            About
                        </button>
                        <button onClick={() => scrollToSection('menu')} className="text-[#736c64] hover:text-[#61525a] transition-colors font-medium">
                            Menu
                        </button>
                        <button onClick={() => scrollToSection('services')} className="text-[#736c64] hover:text-[#61525a] transition-colors font-medium">
                            Services
                        </button>
                        <button onClick={() => scrollToSection('gallery')} className="text-[#736c64] hover:text-[#61525a] transition-colors font-medium">
                            Gallery
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-[#736c64] hover:text-[#61525a] transition-colors font-medium">
                            Contact
                        </button>
                    </nav>

                    {/* Contact Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href={`tel:${cafeInfo.phone}`} 
                        className="flex items-center space-x-2 px-4 py-2 bg-[#61525a] text-white rounded-lg hover:bg-[#4a3f47] transition-all duration-300 hover:scale-105">
                        <Phone className="w-4 h-4" />
                        <span className="font-medium">Call Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                            <div className="px-4 py-4 space-y-3">
                                <button onClick={() => toggleMobileMenu('about')} className="block w-full text-left px-4 py-2 text-[#736c64] hover:bg-gray-50 rounded-lg transition-colors">
                                    About
                                </button>
                                <button onClick={() => toggleMobileMenu('menu')} className="block w-full text-left px-4 py-2 text-[#736c64] hover:bg-gray-50 rounded-lg transition-colors">
                                    Menu
                                </button>
                                <button onClick={() => toggleMobileMenu('gallery')} className="block w-full text-left px-4 py-2 text-[#736c64] hover:bg-gray-50 rounded-lg transition-colors">
                                    Gallery
                                </button>
                                <button onClick={() => toggleMobileMenu('contact')} className="block w-full text-left px-4 py-2 text-[#736c64] hover:bg-gray-50 rounded-lg transition-colors">
                                    Contact
                                </button>
                                <a href={`tel:${cafeInfo.phone}`} 
                                    className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-[#61525a] text-white rounded-lg hover:bg-[#4a3f47] tansition-colors">
                                    <Phone className="w-4 h-4" />
                                    <span> Call Now</span>
                                </a>
                            </div>
                        </div>
                    )}
                    </header>
    );
};


export default Header;
