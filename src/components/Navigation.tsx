import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Categories', href: '#categories' },
    { label: 'Guides', href: '#guides' },
    { label: 'How It Works', href: '#process' },
    { label: 'Stories', href: '#testimonials' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => handleNavClick('#hero')}
            >
              <span className="text-2xl mr-2 group-hover:scale-110 transition-transform duration-300">🐢</span>
              <span className="text-xl font-bold text-gray-800">SoulTurtle</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              
              <button className="px-6 py-2 bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Start Journey
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300">
                Start Journey
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50 flex items-center justify-center transition-all duration-300 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 hover:scale-110 hover:shadow-xl' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-5 h-5 text-gray-600" />
      </button>
    </>
  );
};

export default Navigation;