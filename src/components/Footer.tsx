import React from 'react';
import { Heart, Mail, MessageCircle, Shield, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-indigo-950 to-indigo-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">🐢</span>
              <h3 className="text-2xl font-semibold">SoulTurtle</h3>
            </div>
            <p className="text-indigo-200 leading-relaxed mb-6 max-w-md font-normal">
              A digital sanctuary where ancient wisdom meets modern life. 
              Connect with guides who help you discover the answers already within you.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]">
                <Mail className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]">
                <MessageCircle className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]">
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Explore</h4>
            <ul className="space-y-2 text-indigo-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-300 font-normal">Find Your Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 font-normal">Browse Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 font-normal">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 font-normal">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-indigo-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-300 font-normal">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 font-normal">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 font-normal">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 font-normal">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mb-8 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
          <div className="text-center mb-3">
            <h4 className="text-lg font-medium mb-3">Trusted by Seekers Worldwide</h4>
            <div className="flex justify-center items-center space-x-8 text-sm">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                <span className="font-normal">Secure & Private</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="font-normal">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2 text-pink-400" />
                <span className="font-normal">Human-Centered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-indigo-800 pt-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-indigo-300 mb-4 md:mb-0 font-normal">
              © 2025 SoulTurtle. Made with love for seekers everywhere.
            </p>
            
            <div className="flex items-center space-x-6 text-indigo-300 text-sm">
              <span className="font-normal">🌍 Available Worldwide</span>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center pt-6 border-t border-indigo-800">
          <p className="text-indigo-300 text-lg italic mb-3 font-light">
            "The turtle teaches us that the journey inward is the longest journey of all."
          </p>
          <div className="text-2xl">🌙</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;